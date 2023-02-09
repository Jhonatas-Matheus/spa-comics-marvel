import React from "react";
import logo from "../assets/Marvel_Logo.svg";
import { StyledNavbar } from "./styles/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import Inputs from "./Inputs";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <StyledNavbar>
      <img src={logo} alt="" />
      {/* Mobile - Start */}
      <Inputs />
      <GiHamburgerMenu size={30} color="white" />
      {/* Mobile - End */}
      {/* Desktop - Start */}
      {/* Desktop - End */}
    </StyledNavbar>
  );
};

export default Navbar;
