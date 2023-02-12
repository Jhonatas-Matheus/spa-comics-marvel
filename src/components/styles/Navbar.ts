import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  align-items: center;
  width: 100%;
  height: 4em;
  background: linear-gradient(
    270deg,
    rgba(21, 21, 23, 1) 0%,
    rgba(1, 1, 8, 1) 56%,
    rgba(213, 225, 227, 1) 100%
  );
  div {
    display: none;
  }
  img {
    width: 30%;
    object-fit: scale-down;
  }
  @media (min-width: 768px) {
    div {
      display: flex;
      gap: 1em;
    }
    padding: 0 2em;
    img {
      width: 15%;
    }
    .icons {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    padding: 0 2em;
    img {
      width: 10%;
    }
    svg {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    padding: 0 2em;
    img {
      width: 5%;
    }
  }
`;
