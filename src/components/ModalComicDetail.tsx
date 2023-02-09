import { Button } from "@mui/material";
import { useContext } from "react";
import { ModalContext, ModalMapsContext } from "../context/ModalContext";
import { StyledComicModalDetail } from "./styles/ModalComicDetail";

type Props = {};

const ModalComicDetail = (props: Props) => {
  const { showModal: showModalMaps, setShowModal: setShowModalMaps } =
    useContext(ModalMapsContext);
  const { showModal, setShowModal, image, title, description } =
    useContext(ModalContext);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(showModal);
  return (
    <>
      <StyledComicModalDetail display={showModal}>
        <div className="background" onClick={() => handleCloseModal()}></div>
        <div className="content">
          <h2>{title}</h2>
          <img src={image} alt="Imagem do quadrinho" />
          <p>
            {description
              ? description
              : "Esse quadrinho é misterioso ele não possui uma descrição. "}
          </p>
          <Button
            variant="contained"
            onClick={() => {
              setShowModal(false);
              setShowModalMaps(true);
            }}
          >
            Enviar
          </Button>
        </div>
      </StyledComicModalDetail>
    </>
  );
};

export default ModalComicDetail;
