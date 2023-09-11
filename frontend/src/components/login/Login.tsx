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
  CardHeader,
} from "@nextui-org/react";
import PeerPrepLogo from "../PeerPrepLogo";
import SubmitLogo from "./SubmitLogo";
import GithubLogo from "./GithubLogo";
import GoogleLogo from "./GoogleLogo";
import EyeHideLogo from "./EyeHideLogo";
import EyeShowLogo from "./EyeShowLogo";

export default function LoginComponent() {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  // Flags
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCheckPasswordVisible, setIsCheckPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Toggles
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const toggleCheckPasswordVisibility = () =>
    setIsCheckPasswordVisible(!isCheckPasswordVisible);
  const toggleSignUp = () => setIsSignUp(!isSignUp);

  // throw new Error("Not implemented");

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="items-center justify-center w-96 mx-auto pt-10 pb-10">
        <form className="w-1/2">
          <PeerPrepLogo />
          <CardHeader className="lg font-bold justify-center">
            PeerPrep
          </CardHeader>
          <Spacer y={3} />
          <Input
            isClearable
            isRequired
            fullWidth
            onInput={(e) => {
              setEmail(e.currentTarget.value);
            }}
            placeholder="Email"
          />
          <Spacer y={1} />
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            isClearable
            isRequired
            fullWidth
            onInput={(e) => {
              setPassword(e.currentTarget.value);
            }}
            endContent={
              isPasswordVisible ? (
                <Button
                  variant="light"
                  className="focus:outline-none"
                  size="sm"
                  isIconOnly
                  onClick={togglePasswordVisibility}
                >
                  <EyeHideLogo height="50%" />
                </Button>
              ) : (
                <Button
                  variant="light"
                  className="px-2 focus:outline-none"
                  size="sm"
                  isIconOnly
                  onClick={togglePasswordVisibility}
                >
                  <EyeShowLogo height="50%" />
                </Button>
              )
            }
          />
          {isSignUp ? (
            <div className="items-center">
              <Spacer y={1} />
              <Input
                type={isCheckPasswordVisible ? "text" : "password"}
                placeholder="Re-enter password"
                isClearable
                isRequired
                fullWidth
                onInput={(e) => {
                  setCheckPassword(e.currentTarget.value);
                }}
                endContent={
                  isCheckPasswordVisible ? (
                    <Button
                      variant="light"
                      className="focus:outline-none"
                      size="sm"
                      isIconOnly
                      onClick={() => toggleCheckPasswordVisibility()}
                    >
                      <EyeHideLogo height="50%" />
                    </Button>
                  ) : (
                    <Button
                      variant="light"
                      className="px-2 focus:outline-none"
                      size="sm"
                      isIconOnly
                      onClick={() => toggleCheckPasswordVisibility()}
                    >
                      <EyeShowLogo height="50%" />
                    </Button>
                  )
                }
              />
              <Spacer y={1} />
              <Input
                isClearable
                isRequired
                fullWidth
                onInput={(e) => {
                  setName(e.currentTarget.value);
                }}
                placeholder="Name"
              />
              {password != checkPassword ? (
                <div className="text-center text-xs underline font-bold decoration-red-500">
                  Passwords do not match
                </div>
              ) : (
                <></>
              )}
              <Spacer y={2} />
              <div className="flex flex-col items-center pt-5 space-y-5">
                <Button
                  isLoading={isSubmitted}
                  type="submit"
                  color="secondary"
                  className="w-1/2"
                  onClick={() => setIsSubmitted(true)}
                >
                  {isSubmitted ? <></> : <>Sign Up</>}
                </Button>
                <Link
                  className="cursor-pointer"
                  onClick={() => {
                    toggleSignUp();
                  }}
                >
                  Back to login
                </Link>
              </div>
            </div>
          ) : (
            <>
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
                  type="submit"
                  isLoading={isSubmitted}
                  isIconOnly
                  aria-label="Submit"
                  size="sm"
                  color="secondary"
                  onClick={() => {
                    setIsSubmitted(true);
                  }}
                  href="/verify"
                >
                  {!isSubmitted ? (
                    <SubmitLogo height="70%" width="70%" />
                  ) : (
                    <></>
                  )}
                </Button>
              </div>
              <Spacer y={5} />
              <div className="flex justify-between">
                <Link size="sm" href="#">
                  Forgot password?
                </Link>
                <Link
                  className="cursor-pointer"
                  size="sm"
                  onClick={() => {
                    toggleSignUp();
                  }}
                >
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
            </>
          )}
        </form>
      </Card>
    </div>
  );
}
