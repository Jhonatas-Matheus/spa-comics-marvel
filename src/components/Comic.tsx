import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { StyledComic } from "./styles/Comic";

type Props = {
  thumbnail: string;
  comicDetails: {
    tilte: string;
    description: string | null;
    characters: { resourceURI: string; name: string }[];
    image: string;
  };
};

const Comic = ({ thumbnail, comicDetails }: Props) => {
  const { showModal, setShowModal, setImage, setTitle, setDescription } =
    useContext(ModalContext);
  const handleViewMore = () => {
    setShowModal(!showModal);
    setImage(comicDetails.image);
    setTitle(comicDetails.tilte);
    setDescription(comicDetails.description as string);
  };
  return (
    <StyledComic>
      <img src={thumbnail} alt="" />
      <Button variant="contained" onClick={handleViewMore}>
        Ver mais
      </Button>
    </StyledComic>
  );
};

export default Comic;
