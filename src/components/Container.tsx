import React, { useContext, useEffect, useState } from "react";
import { useRequests } from "../hooks/useRequests";
import SectionComic from "./SectionComic";
import loadingSpinner from "../assets/spinner/Dual Ring-0.8s-197px.svg";

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
