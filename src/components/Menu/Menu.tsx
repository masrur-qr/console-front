"use client";
import { useAppContext } from "@/context";

export default function Menu() {
  const { isOpen, setIsOpen } = useAppContext();
  console.log(isOpen);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Меню</button>
    </div>
  );
}
