import {
  Input,
  Button,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Spacer,
  SelectItem,
  Select,
} from "@nextui-org/react";
import User from "@/types/user";
import { FormEvent, useEffect, useState } from "react";
import { COMPLEXITY, LANGUAGE, TOPIC } from "@/types/enums";
import { StringUtils } from "@/utils/stringUtils";
import { ToastType } from "@/types/enums";
import displayToast from "@/components/common/Toast";
import { UserService } from "@/helpers/user/user_api_wrappers";
import Preference from "@/types/preference";
import { useAuthContext } from "@/contexts/auth";
import { getTopics } from "@/helpers/question/question_api_wrappers";

interface InformationProps {
  user: User;
  imageUrl: string;
  setIsChangePassword: (isChangePassword: boolean) => void;
}

export default function Information({
  user,
  imageUrl,
  setIsChangePassword,
}: InformationProps) {
  const { user: currentUser, fetchUser } = useAuthContext();
  const [name, setName] = useState<string>(user.name);
  const [bio, setBio] = useState<string>(user.bio ? user.bio : "");
  const [gender, setGender] = useState(user.gender ? user.gender : "OTHER");
  const [preferences, setPreferences] = useState(
    user.preferences || { languages: [], difficulties: [], topics: [] }
  );

  const [languagesSelected, setLanguagesSelected] = useState(
    user.preferences?.languages
  );
  const [difficultiesSelected, setDifficultiesSelected] = useState(
    user.preferences?.difficulties
  );
  const [topicsSelected, setTopicsSelected] = useState(
    user.preferences?.topics
  );

  const languageArray = Object.values(LANGUAGE);
  const difficultiesArray = Object.values(COMPLEXITY);
  // const topicArray = StringUtils.convertEnumsToCamelCase(TOPIC);
  const [topicArray, setTopicArray] = useState<string[]>([]);

  const handleOnLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!event.target.value) {
      setLanguagesSelected([]);
    } else {
      setLanguagesSelected(event.target.value.split(","));
    }
  };

  const handleOnDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!event.target.value) {
      setDifficultiesSelected([]);
    } else {
      setDifficultiesSelected(event.target.value.split(","));
    }
  };

  const handleOnTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) {
      setTopicsSelected([]);
    } else {
      setTopicsSelected(event.target.value.split(","));
    }
  };

  useEffect(() => {
    setPreferences({
      languages: languagesSelected ? languagesSelected : [],
      difficulties: difficultiesSelected ? difficultiesSelected : [],
      topics: topicsSelected ? topicsSelected : [],
    });
    console.log(preferences);
  }, [languagesSelected, difficultiesSelected, topicsSelected]);

  const genders: { [key: string]: string } = {
    MALE: "Male",
    FEMALE: "Female",
    "": "Prefer not to say",
    OTHER: "Prefer not to say",
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
    console.log("User info: " + JSON.stringify(user));
  };

  useEffect(() => {
    updatedUser.image = imageUrl;
  }, [imageUrl]);

  let updatedUser: User = {
    name: name,
    email: user.email,
    bio: bio ? bio : undefined,
    role: user.role,
    gender: gender,
    image: imageUrl ? imageUrl : undefined,
  };

  async function saveInformation(
    e: FormEvent<HTMLFormElement>,
    updatedUser: User,
    preferences: Preference
  ) {
    e.preventDefault();

    console.log(updatedUser);

    try {
      if (!user) {
        throw new Error("User not retrieved");
      }

      if (!user.id) {
        throw new Error("User ID not retrieved");
      }

      let resPref = await UserService.updateUserPreference(
        user.id,
        preferences
      );
      let res = await UserService.updateUser(user.id, updatedUser);
      await fetchUser(currentUser.id!);
      displayToast("Information saved successfully!", ToastType.SUCCESS);
    } catch (error) {
      displayToast(
        "Something went wrong. Please refresh and try again.",
        ToastType.ERROR
      );
    }
  }

  useEffect(() => {
    async function setUpTopics() {
      await getTopics().then(topics => {
        setTopicArray(topics)
      })
    }
    setUpTopics();
  }, [])

  return (
    <div>
      <header className="justify-center text-m underline">
        Edit your information:
      </header>
      <Spacer y={4} />
      <form
        className="justify-center max-w-xl space-y-4"
        onSubmit={(e) => {
          saveInformation(e, updatedUser, preferences);
        }}
      >
        <Input
          isRequired
          label="Name"
          isClearable
          minLength={2}
          defaultValue={user.name}
          onValueChange={setName}
        />
        <Input
          label="Bio"
          isClearable
          maxLength={50}
          defaultValue={user.bio}
          onValueChange={setBio}
        />
        <div className="flex flex-row space-x-5 items-center">
          <p>Gender:</p>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">{genders[gender]}</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Gender"
              onAction={(key) => handleGenderChange(String(key))}
            >
              <DropdownItem key="MALE" color={"default"}>
                Male
              </DropdownItem>
              <DropdownItem key="FEMALE" color={"default"}>
                Female
              </DropdownItem>
              <DropdownItem key="OTHER" color={"default"}>
                Prefer not to say
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div
          className={
            "flex flex-col h-full justify-start gap-4 text-sm overflow-hidden"
          }
        >
          <Select
            name="languages"
            label="Progamming languages"
            selectionMode="multiple"
            placeholder="Select a language"
            classNames={{
              value: "capitalize"
            }}
            selectedKeys={preferences.languages}
            onChange={handleOnLanguageChange}
          >
            {languageArray.map((value) => (
              <SelectItem className="capitalize" key={value} value={value}>
                {value.toLowerCase()}
              </SelectItem>
            ))}
          </Select>
          <Select
            name="difficulties"
            label="Complexity"
            selectionMode="multiple"
            placeholder="Select a complexity level"
            classNames={{
              value: "capitalize"
            }}
            selectedKeys={preferences.difficulties}
            onChange={handleOnDifficultyChange}
          >
            {difficultiesArray.map((value) => (
              <SelectItem className="capitalize" key={value} value={value}>
                {value.toLowerCase()}
              </SelectItem>
            ))}
          </Select>

          <Select
            name="topics"
            label="Topics"
            selectionMode="multiple"
            placeholder="Select a topic"
            classNames={{
              value: "capitalize"
            }}
            selectedKeys={preferences.topics}
            onChange={handleOnTopicChange}
          >
            {topicArray.map((value) => (
              <SelectItem className="capitalize" key={value} value={value}>
                {value.toLowerCase()}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex flex-row justify-between">
          <Link
            className="cursor-pointer"
            onClick={() => {
              setIsChangePassword(true);
            }}
          >
            Change password
          </Link>
          <Button type="submit" color="primary">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
