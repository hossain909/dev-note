"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import google from "@public/google.webp";
import github2 from "@public/github2.webp";
import Link from "next/link";

type Props = {};

export default function LoginPage({}: Props) {
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (data?.user?.email) {
      router.push("/feed");
    }
  }, [router, data?.user?.email]);
  return (
    <div className="max-w-screen-xl md:m-0 sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 md:mt-20">
        <div className="flex flex-col items-center shadow-inner rounded-lg">
          <div className="w-full flex-1">
            {/** Signup with Oauth providers */}
            <div className="flex flex-col items-center">
              <button className="btn_oauth" onClick={() => signIn("google")}>
                <Image src={google} width={25} height={25} alt="google-icon" />
                <span className="ml-4">Sign Up with Google</span>
              </button>

              <button className="btn_oauth" onClick={() => signIn("github")}>
                <Image src={github2} width={25} height={25} alt="github-icon" />
                <span className="ml-4">Sign Up with GitHub</span>
              </button>
            </div>

            <div className="my-12 border-b border-gray-600 text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-400 tracking-wide font-medium bg-gray-900 transform translate-y-1/2">
                Or sign up with e-mail
              </div>
            </div>

            {/** Singup with email */}
            <div className="mx-auto max-w-xs">
              <input className="login_input" type="email" placeholder="Email" />
              <input
                className="login_input"
                type="password"
                placeholder="Password"
              />
              <button className="btn_signup">
                {/* <BiUserPlus size={30} /> */}
                <span>Sign Up</span>
              </button>
              <p className="my-5 text-xs text-gray-400 text-center">
                I agree to abide by DEV.
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>{" "}
                and its{" "}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
