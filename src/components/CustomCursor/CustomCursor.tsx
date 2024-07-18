"use client"
import React, { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor: any = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });

    const projectItems = document.querySelectorAll(".project__list-item");

    projectItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
      });

      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
      projectItems.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;
