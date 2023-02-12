import { Input, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import styled from "styled-components";

export const StyledSelect = styled.div`
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
  }
  select {
    width: fit-content;
    background-color: grey;
    padding: 0.5em 1em;
    margin: 0 0.5em;
    /* border-radius: 15px; */
    option {
      margin: 0.5em 0;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 5px; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: grey; /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: red; /* color of the scroll thumb */
      /* border-radius: 5px; */
      /* height: 10px; */
      /* border: 25px solid orange;  creates padding around scroll thumb */
    }
    &::-moz-list-bullet {
      color: red;
    }
  }
  /* &:active{
    scroll
  } */
`;
