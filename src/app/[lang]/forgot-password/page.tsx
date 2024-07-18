"use client";

import Logo from "@/components/Logo/Logo";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import toast, { Toaster } from "react-hot-toast";

export default function ForgotPassword() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const emailRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleEmail(e: any) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/verify?email=${emailRef.current?.value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          credentials: "include",
        }
      );

      console.log(response);
      console.log("email", emailRef.current.value);
      
      
      if (response.status == 200) {
        const params = new URLSearchParams(searchParams);
        params.set("query", emailRef.current.value);
        // console.log("params", params.toString());
        // console.log("params2", params.get("query"));
        replace(`/en/send-code/?query=${params.get("query")}`);
        setLoading(false);
      } else if ((await response.json()) == "User Not-Found") {
        notFound();
        setLoading(false);
      } else if (response.status == 400) {
        errorToast();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const successToast = () => toast.success("Successfully created!");
  const errorToast = () => toast.error("Fill all fields");
  const notFound = () => toast.error("Cannot find user!");

  return (
    <main>
      <div className="wrapper pt-5">
        <Logo />
        <form
          onSubmit={handleEmail}
          className="flex flex-col justify-center items-center gap-12 min-h-[80vh]"
        >
          <div>
            <p>Email</p>
            <div className="relative mt-3">
              <input
                type="text"
                id="email"
                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-[1000px] text-sm appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                ref={emailRef}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>
          </div>
          <button
            className={`w-[181px] h-[54px] flex items-center justify-center rounded-[10px] border duration-500 border-white ${
              loading == false && "hover:bg-white hover:text-black"
            }`}
          >
            {loading == false ? (
              "Send"
            ) : (
              <ThreeDots
                visible={true}
                height="60"
                width="60"
                color="#fff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
          </button>
        </form>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </main>
  );
}
