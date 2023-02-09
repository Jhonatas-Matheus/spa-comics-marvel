import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

import { StyledSectionComic } from "./styles/SectionComic";
import { ComicsContext } from "../context/ComicsContext";
import Comic from "./Comic";

const SectionComic = () => {
  const { comics } = useContext(ComicsContext);
  console.log(comics);
  return (
    <StyledSectionComic>
      {comics.length > 0 ? (
        <Swiper
          navigation={true}
          modules={[Navigation, FreeMode, Pagination]}
          className="mySwiper"
          allowTouchMove={false}
          pagination={true}
        >
          {comics.map((comic) => (
            <SwiperSlide key={comic.id}>
              <div className="container-comic">
                <h2>{comic.title}</h2>
                <Comic
                  thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  comicDetails={{
                    tilte: comic.title,
                    description: comic.description,
                    characters: comic.characters.items,
                    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>
          <p>Desculpe, não foi encontrado quadrinhos para esse personagem</p>
        </div>
      )}
    </StyledSectionComic>
  );
};

export default SectionComic;
