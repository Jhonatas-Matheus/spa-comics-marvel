import { createContext, useState } from "react";

interface ISideBarProps {
  show: boolean;
  setShow: any;
}
interface ISideBarParams {
  children: React.ReactNode;
}

export const SideBarContext = createContext({} as ISideBarProps);

export const SideBarProvider = ({ children }: ISideBarParams) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <SideBarContext.Provider value={{ show, setShow }}>
      {children}
    </SideBarContext.Provider>
  );
};
