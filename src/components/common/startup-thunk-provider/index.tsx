"use client";

import { useAppDispatch } from "@/infrastructure/store/hooks";
import { prepareApp } from "@/infrastructure/store/thunk/startupThunk";
import { useEffect } from "react";

interface StartupThunkProviderProps {
  children: React.ReactNode;
}

const StartupThunkProvider: React.FC<StartupThunkProviderProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(prepareApp());
  }, [dispatch]);

  return <>{children}</>;
};

export default StartupThunkProvider;
