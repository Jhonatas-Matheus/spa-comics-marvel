import React, { useContext } from "react";
import { SideBarContext } from "../context/SideBarContext";
import { StyledSelect } from "./styles/InputMUI";
import { StyledSideBar } from "./styles/Sidebar";
import Inputs from "./Inputs";

type Props = {};

const Sidebar = (props: Props) => {
  const { show, setShow } = useContext(SideBarContext);
  return (
    <StyledSideBar show={show}>
      <Inputs />
    </StyledSideBar>
  );
};

export default Sidebar;
