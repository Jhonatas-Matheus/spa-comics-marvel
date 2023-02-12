import styled from "styled-components";

interface ISideBarProps {
  show: boolean;
}

export const StyledSideBar = styled.div<ISideBarProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  div {
    width: 100%;
    &:nth-child(1) {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      max-width: 100%;
    }
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      max-width: 100%;
      select {
        width: 100%;
        option {
          text-align: center;
        }
      }
    }
  }
  position: absolute;
  z-index: 50;
  transition: 0.5s;
  top: 0;
  left: ${(props) => (props.show ? "0" : "-100%")};
  width: 70%;
  height: 100%;
  background-color: rgba(33, 33, 33, 1);
`;
