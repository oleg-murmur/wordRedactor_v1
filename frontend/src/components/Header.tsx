"use client";

import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { useState } from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const links = [
    { text: "Главная", url: "/" },
    { text: "Новости", url: "/news" },
    { text: "Конструктор", url: "/builder" },
    { text: "Помощь", url: "/help" },
  ];
  return (
    <div
      className={twMerge(
        `
        rounded-none h-fit bg-gradient-to-b from-neutral-700 p-2`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="rounded-full p-2 bg-white text-black">Logo</div>

        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div>
            <Button
              onClick={() => {}}
              className="bg-transparent text-neutral-300 font-medium"
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button onClick={() => {}} className="bg-white px-6 py-2">
              Log in
            </Button>
          </div>
        </div>
      </div>
      <div className="text-lg flex items-center gap-x-2 justify-center">
        {links.map((link, index) => (
          <a
            key={index}
            className='rounded-full p-2 hover:bg-neutral-900 cursor-pointer'
            href={link.url}
          >
            {link.text}
          </a>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Header;