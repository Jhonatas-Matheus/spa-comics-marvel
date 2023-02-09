import { createContext, useContext, useEffect, useState } from "react";
import { useRequests } from "../hooks/useRequests";
import { LoadingContext } from "./LoadingContext";

interface IHerosContext {
  heros?: ICharacterInCache[];
}
interface IHerosContextProps {
  children: React.ReactNode;
}
export interface ICharacterInCache {
  name: string;
  id: number;
}
export const HerosContext = createContext({} as IHerosContext);

export const HerosProvider = ({ children }: IHerosContextProps) => {
  const [heros, setHeros] = useState<ICharacterInCache[]>();
  const { setLoading } = useContext(LoadingContext);
  const { fetchAllCharacters } = useRequests();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const charactersInCache = localStorage.getItem("characters");
      if (charactersInCache) {
        setHeros(JSON.parse(charactersInCache));
        setLoading(false);
        return null;
      }
      const allCharacters: ICharacterInCache[] = [];
      while (allCharacters?.length < 1562) {
        const response = await fetchAllCharacters(allCharacters.length);
        response?.map((e) => allCharacters.push({ name: e.name, id: e.id }));
      }
      localStorage.setItem("characters", JSON.stringify(allCharacters));
      setHeros(allCharacters);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <HerosContext.Provider value={{ heros }}>{children}</HerosContext.Provider>
  );
};
