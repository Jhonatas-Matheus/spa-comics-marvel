import { createContext, useState } from "react";
import { Comics } from "../components/Container";

interface IComicsContext {
  comics: Comics[];
  setComics: React.Dispatch<React.SetStateAction<Comics[]>>;
}
interface IComicsProps {
  children: React.ReactNode;
}
export const ComicsContext = createContext({} as IComicsContext);

export const ComicsProvider = ({ children }: IComicsProps) => {
  const [comics, setComics] = useState<Comics[]>([]);
  return (
    <ComicsContext.Provider value={{ comics, setComics }}>
      {children}
    </ComicsContext.Provider>
  );
};
