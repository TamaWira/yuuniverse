import React from "react";
import { MdOutlineNightlight } from "react-icons/md";
import Logo from "./logo";

export default function Navbar() {
  return (
    <header className="hidden items-center lg:grid grid-cols-3 p-2 px-5">
      <Logo />
      <nav className="flex items-center mx-auto my-auto p-3 px-5 border rounded-full w-fit h-10">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex justify-self-end items-center gap-4 my-auto h-10">
        <button className="hover:bg-gray-600 px-5 border rounded-full h-full cursor-pointer">
          Blog
        </button>
        <MdOutlineNightlight className="w-7 h-7" />
      </div>
    </header>
  );
}
