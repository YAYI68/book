"use client";
import React, {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useRef,
} from "react";
import { DarkIcon, LightIcon } from "./svg";
import SystemIcon from "./svg/SystemIcon";
import { useClickAway } from "@/hooks";

interface Props {
  classname?: string;
  activeTheme: string | null;
  setDisplayTheme: Dispatch<SetStateAction<boolean | null>>;
  setActiveTheme: Dispatch<SetStateAction<string | null>>;
}

const Theme = (props: Props) => {
  const { classname, activeTheme, setDisplayTheme, setActiveTheme } = props;
  const ThemeRef = useRef<HTMLDivElement>(null);
  useClickAway(ThemeRef, () => setDisplayTheme(false));

  const onChangeTheme = (text: string) => {
    setDisplayTheme(false);
    if (text === "system") {
      localStorage.removeItem("theme");
      setActiveTheme(text);
    } else {
      localStorage.setItem("theme", text);
      setActiveTheme(text);
    }
  };

  return (
    <div
      ref={ThemeRef}
      className={` ${classname} flex flex-col rounded-md bg-white  dark:bg-slate-800 py-2`}
    >
      <button
        onClick={() => onChangeTheme("dark")}
        className={`  ${
          activeTheme === "dark" ? "text-red-600" : ""
        } w-full p-2 flex items-center  gap-2 hover:bg-slate-500 `}
      >
        <span>
          <DarkIcon classname="h-[1rem] w-[1rem]" />
        </span>
        <span>Dark</span>
      </button>
      <button
        onClick={() => onChangeTheme("light")}
        className={`  ${
          activeTheme === "light" ? "text-red-600" : ""
        } w-full p-2 flex items-center gap-2 hover:bg-slate-500 `}
      >
        <span>
          <LightIcon classname="h-[1rem] w-[1rem]" />
        </span>
        <span>Light</span>
      </button>
      <button
        onClick={() => onChangeTheme("system")}
        className={` ${
          activeTheme === "system" ? "text-red-600" : ""
        } w-full p-2 flex items-center  gap-2 hover:bg-slate-500 `}
      >
        <span>
          <SystemIcon classname="h-[1rem] w-[1rem]" />
        </span>
        <span>System</span>
      </button>
    </div>
  );
};

export default Theme;
