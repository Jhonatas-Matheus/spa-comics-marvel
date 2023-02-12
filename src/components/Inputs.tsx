import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles, MenuItem } from "@mui/material";

import { useContext, useEffect, useState } from "react";

import { CharacterResponse, useRequests } from "../hooks/useRequests";
import { alphabet } from "../utils/alphabet";
import { ComicsContext } from "../context/ComicsContext";
import { HerosContext } from "../context/HerosContext";
import { ICharacterInCache } from "../context/HerosContext";
import { StyledSelect } from "./styles/InputMUI";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import { Comics } from "./Container";
import SelectInput from "./Select";
type Props = {};

const Inputs = (props: Props) => {
  const { fetchComicsOfCharacter } = useRequests();

  const { heros } = useContext(HerosContext);
  const { setComics } = useContext(ComicsContext);

  const [letter, setLetter] = useState<string>();
  const [heroId, setHeroID] = useState<string>();
  const [displayHeros, setDisplayHeros] = useState<
    CharacterResponse[] | ICharacterInCache[]
  >();

  const fetchComics = async (id: string) => {
    const comicsOfCharacter = await fetchComicsOfCharacter(id as string);
    console.log(comicsOfCharacter);
    setComics(comicsOfCharacter as Comics[]);
  };
  const handleChangeLetter = (letter: string) => {
    setLetter(letter);
  };
  const handleChangeHero = (id: string) => {
    fetchComics(id);
  };

  useEffect(() => {
    console.log(heros);
    console.log(displayHeros);
    const filtredHeros = heros?.filter(
      (hero) =>
        hero.name[0] === letter?.toLocaleLowerCase() ||
        hero.name[0] === letter?.toLocaleUpperCase()
    );
    setDisplayHeros(filtredHeros);
  }, [letter]);

  return (
    <div>
      <StyledSelect>
        <label>
          <span>Selecione a inicial do seu herói:</span>
          <select onChange={(e) => handleChangeLetter(e.target.value)}>
            {alphabet.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </label>
      </StyledSelect>
      <StyledSelect>
        <label>
          <span>Selecione o seu herói:</span>
          <select onChange={(e) => handleChangeHero(e.target.value)}>
            {displayHeros?.map((e) => (
              <option value={e.id}>{e.name}</option>
            ))}
          </select>
        </label>
      </StyledSelect>
    </div>
  );
};

export default Inputs;
