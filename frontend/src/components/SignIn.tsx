"use client";
import React, { useState } from "react";
import {
  Card,
  Spacer,
  Button,
  Input,
  Checkbox,
  Link,
  Divider,
} from "@nextui-org/react";
import PeerPrepLogo from "./PeerPrepLogo";
import SubmitLogo from "./SubmitLogo";
import GithubLogo from "./GithubLogo";
import GoogleLogo from "./GoogleLogo";
import EyeHideLogo from "./EyeHideLogo";
import EyeShowLogo from "./EyeShowLogo";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRemembered, setIsRemembered] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="items-center justify-center w-96 mx-auto pt-10 pb-10">
        <div className="w-1/2">
          <PeerPrepLogo />
          <header className="lg font-bold text-center">PeerPrep</header>
          <Spacer y={3} />
          <Input
            isClearable
            isRequired
            fullWidth
            onInput={(e) => {
              setUsername(e.currentTarget.value);
            }}
            placeholder="Username"
          />
          <Spacer y={1} />
          <Input
            className="h-15"
            type={isPasswordVisible ? "text" : "password" }
            placeholder="Password"
            isClearable
            isRequired
            fullWidth
            onInput={(e) => {
              setPassword(e.currentTarget.value);
            }}
            endContent={
                isPasswordVisible ? (
                    <Button className="focus:outline-none" size="sm" isIconOnly onClick={togglePasswordVisibility}>
                        <EyeHideLogo height="50%"/>
                    </Button>
                ) : (
                    <Button className="focus:outline-none" size="sm" isIconOnly onClick={togglePasswordVisibility}>
                        <EyeShowLogo height="50%"/>
                    </Button>
                )
            }
          />
          <Spacer y={3} />
          <div className="flex justify-between">
            <Checkbox
              size="sm"
              onClick={() => {
                setIsRemembered(true);
              }}
            >
              Remember me
            </Checkbox>
            <Button
              isLoading={isSubmitted}
              isIconOnly
              aria-label="Submit"
              size="sm"
              color="secondary"
              onClick={() => {
                setIsSubmitted(true);
              }}
            >
              {!isSubmitted ? <SubmitLogo height="70%" width="70%" /> : <></>}
            </Button>
          </div>
          <Spacer y={5} />
          <div className="flex justify-between">
            <Link size="sm" href="#">
              Forgot password?
            </Link>
            <Link size="sm" href="#">
              Sign Up
            </Link>
          </div>
          <Spacer y={5} />
          <Divider />
          <Spacer y={5} />
          <div className="flex items-center justify-between h-10 w-100%">
            <header className="text-xs">Sign in with:</header>
            <div className="flex justify-between space-x-5 p-x-5">
              <Button isIconOnly variant="faded">
                <GithubLogo height="50%" />
              </Button>
              <Button isIconOnly variant="faded">
                <GoogleLogo height="50%" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
