import React from "react";
import { StyledLoadingPage } from "./styles/LoadingPage";
import loadingSpinner from "../assets/spinner/Dual Ring-0.8s-197px.svg";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <StyledLoadingPage>
      <img src={loadingSpinner} alt="spinner vermelho" />
      <h2>
        Estamos preparando a coleção para você, pode demorar alguns segundos
      </h2>
      <h2>
        Fique tranquilo você só precisará esperar uma vez, no seu próximo acesso
        nossa coleção já estará pronta.
      </h2>
    </StyledLoadingPage>
  );
};

export default LoadingPage;
