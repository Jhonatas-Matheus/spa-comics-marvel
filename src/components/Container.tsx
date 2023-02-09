import React, { useContext, useEffect, useState } from "react";
import { useRequests } from "../hooks/useRequests";
import SectionComic from "./SectionComic";

import { CharacterResponse } from "../hooks/useRequests";

import { ComicsContext } from "../context/ComicsContext";
import { StyledContainer } from "./styles/StyledContainer";

type submit = {
  id: string;
};
export type Comics = {
  id: number;
  thumbnail: { path: string; extension: string };
  title: string;
  characters: { items: { resourceURI: string; name: string }[] };
  description: string | null;
};

const Container = () => {
  return (
    <StyledContainer>
      <SectionComic />;
    </StyledContainer>
  );
};

export default Container;
