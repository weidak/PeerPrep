import { Input, Button, Link } from "@nextui-org/react";

interface InformationProps {
    setIsChangePassword: (isChangePassword: boolean) => void;
}

export default function Information({setIsChangePassword}: InformationProps) {
    return (
    <>
        <header className="justify-center text-m underline">Edit your information:</header>
        <form className="justify-center max-w-xl space-y-4">
            <Input
                label="PeerPrep id"
                variant="underlined"
                isClearable
            />
            <Input
                label="Name"
                variant="underlined"
                isClearable
            />
            <Input
                label="Email"
                variant="underlined"
                isClearable
            />
            <Input
                label="Bio"
                variant="underlined"
                isClearable
            />
            <Input
                label="Gender"
                variant="underlined"
                isClearable
            />
            <div className="flex flex-row justify-between">
                <Button type="submit" color="secondary">
                    Save
                </Button>
                <Link className="cursor-pointer" onClick={() => {setIsChangePassword(true)}} >Change password</Link>
            </div>
        </form>
    </>
    )
}