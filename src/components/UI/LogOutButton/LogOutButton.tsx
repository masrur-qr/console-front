"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogOutButton() {
  const router = useRouter();

  useEffect(() => {
    let existingCookies: any = {};

    document.cookie.split(" ").forEach((cookie) => {
      const cookieName = cookie.split("=")[0];
      const cookieValue = cookie.split("=")[1];

      existingCookies = { ...existingCookies, [cookieName]: cookieValue };
    });

    console.log("cookies", existingCookies);
    if (
      !existingCookies.User_Loged_In ||
      existingCookies.User_Loged_In == "" ||
      existingCookies.User_Loged_In == null
    ) {
      router.replace("/en");
    }
  }, []);

  async function handleLogOut() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/signout`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          credentials: "include",
        }
      );

      if (response.status == 200) {
        console.log("succsess");

        router.replace("/ru");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return <button onClick={handleLogOut}>Sign Out</button>;
}
