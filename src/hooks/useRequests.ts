import { AxiosResponse } from "axios";
import { useState } from "react";
import { Comics } from "../components/Container";
import { api } from "../services/api";
import { useToast } from "./useToast";

export type CharacterResponse = {
  name: string;
  description: string;
  id: number;
  resourceURI: string;
  thumbnail: { path: string; extension: string };
};

export const useRequests = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toastSucess, toastFail } = useToast();
  const fetchAllCharacters = async (numberOfPage: number) => {
    setLoading(true);
    try {
      const response: AxiosResponse = await api.get("/characters", {
        params: { limit: 100, offset: numberOfPage },
      });
      return response.data.data.results as CharacterResponse[];
    } catch (error) {
      
    }
  };
  const fetchComicsOfCharacter = async (characterId: string) => {
    setLoading(true);
    try {
      const response: AxiosResponse = await api.get(
        `/characters/${characterId}/comics`
      );
      
      return response.data.data.results as Comics[];
    } catch (error) {
      
    }
  };
  return { loading, fetchAllCharacters, fetchComicsOfCharacter };
};
