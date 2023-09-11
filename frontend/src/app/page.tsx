import Image from "next/image";
import {Button} from '@nextui-org/button';
import Link from "next/link";
import SignIn from "./(pages)/login/sign-in";

export default function Home() {
  return (
    <>
      <Link href="/questions">Questions</Link>
      <SignIn></SignIn>
    </>
  );
}
