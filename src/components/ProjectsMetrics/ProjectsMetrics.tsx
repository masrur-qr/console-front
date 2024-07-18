"use client"
import { useEffect } from "react";

export default function ProjectsMetrics() {
  async function projectViews() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/project/views`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          credentials: "include",
        }
      );
      console.log(response);

      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    projectViews();
  }, []);

  return <></>;
}
