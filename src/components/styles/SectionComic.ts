import styled from "styled-components";

export const StyledSectionComic = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 60%;
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 768px) {
  }
  .swiper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    .container-comic {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 0.5em;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 1.5em;
      h2 {
        width: 50%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .swiper-slide {
    width: 100%;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
