"use client";

import { Loader } from "@/components/shared";
import useTheme from "@/hooks/useTheme";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
  headers: any;
};

interface AppContextValueType {
  activeTheme: string | null;
  setActiveTheme: Dispatch<SetStateAction<string | null>>;
  headers: any;
}

const AppContextValue: AppContextValueType = {
  activeTheme: "",
  setActiveTheme: () => {},
  headers: {},
};

const AppContext = createContext<AppContextValueType | null>(AppContextValue);

const AppProvider = (props: Props) => {
  const [headers, setHeaders] = useState(props.headers);
  const { activeTheme, setActiveTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const value = {
    activeTheme,
    setActiveTheme,
    headers,
  };

  return (
    <AppContext.Provider value={value}>
      {loading ? <Loader /> : props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context == undefined) {
    throw new Error("useAppContext must be within a App provider");
  }
  return context;
};
