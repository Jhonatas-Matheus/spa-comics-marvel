import React, { useContext } from "react";
import logo from "../assets/Marvel_Logo.svg";
import { StyledNavbar } from "./styles/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Inputs from "./Inputs";
import { SideBarContext } from "../context/SideBarContext";

type Props = {};

const Navbar = (props: Props) => {
  const { show, setShow } = useContext(SideBarContext);

  return (
    <StyledNavbar>
      <img src={logo} alt="" />
      {/* Mobile - Start */}
      <Inputs />
      {!show ? (
        <GiHamburgerMenu
          className="icons"
          size={30}
          color="white"
          onClick={() => setShow(!show)}
        />
      ) : (
        <MdClose
          size={30}
          color="white"
          onClick={() => setShow(!show)}
          className="icons"
        />
      )}

      {/* Mobile - End */}
      {/* Desktop - Start */}
      {/* Desktop - End */}
    </StyledNavbar>
  );
};

export default Navbar;
