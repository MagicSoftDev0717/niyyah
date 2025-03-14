"use client";
import { signIn } from "next-auth/react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
// import SocialSignIn from "../SocialSignIn";
// import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="text-center text-2xl text-white mx-auto inline-block max-w-[3200px] bg-transparent bg-opacity-20 ">
        {/* <Logo /> */}
        Unlock Your Full Potential!
      </div>

      {/* <SocialSignIn /> */}

      <span className="z-1 relative my-8 block text-center">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-medium text-white">
        Fill out the form to get exclusive access<br /> to expert insights, personalized<br /> solutions, and the latest innovations in<br /> AI, AR, and entrepreneurship.
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Your Name*"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Your e-mail*"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Your Password*"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="w-full border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-primary w-1/2 py-3 text-18 font-medium border border-primary hover:text-primary hover:bg-transparent"
          >
            Send {loading && <Loader />}
          </button>
        </div>
      </form>

      {/* <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary"
      >
        Forgot Password?
      </Link> */}
      {/* <p className="text-body-secondary text-white text-base">
        Not a member yet?{" "}
        <Link href="/" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p> */}
    </>
  );
};

export default Signin;