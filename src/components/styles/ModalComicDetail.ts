import styled from "styled-components";

interface IModalProps {
  display: boolean;
}

export const StyledComicModalDetail = styled.div<IModalProps>`
  position: relative;
  z-index: 10;
  top: -100%;
  transition: 1s;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
  justify-content: center;
  box-sizing: border-box;
  @media (min-width: 768px) {
    .content {
      width: 50%;
    }
  }
  .background {
    position: absolute;
    z-index: 20;
    transition: 0.5s;
    background-color: rgba(33, 33, 33, 0.95);
    opacity: ${(props) => (props.display ? "1" : "0")};
    pointer-events: ${(props) => (props.display ? "all" : "none")};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .content {
    position: absolute;
    z-index: 50;
    transition: 0.5s;
    background-color: rgba(33, 33, 33, 1);
    top: ${(props) => (props.display ? "0" : "-100%")};
    opacity: ${(props) => (props.display ? "1" : "0")};
    pointer-events: ${(props) => (props.display ? "painted" : "none")};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    height: 100%;
    width: 80%;
    box-sizing: border-box;
    padding: 2em 0;
    button {
      position: relative;
      z-index: 20;
    }
    img {
      width: 100%;
      height: 50%;
      object-fit: contain;
    }
    h2,
    p {
      color: white;
      text-align: center;
    }
    p {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .content {
      width: 50%;
    }
  }
`;
