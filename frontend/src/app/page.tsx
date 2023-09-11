import Image from "next/image";
import {Button} from '@nextui-org/button';
import Link from "next/link";
// import Login from "./(pages)/login/login";
import LoginComponent from "@/components/login/Login";
// import Profile from "@/components/dashboard/Profile";

export default function Home() {
  return (
    <>
      <Link href="/questions">Questions</Link>
      <Link href="/login">Login</Link>
      {/* <LoginComponent/> */}
      {/* <Profile/> */}
    </>
  );
}
