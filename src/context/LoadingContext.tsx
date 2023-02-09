import { createContext, useState } from "react";

export interface IContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IContextArgs {
  children: React.ReactNode;
}
export const LoadingContext = createContext({} as IContextProps);

export const LoadingProvider = ({ children }: IContextArgs) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
