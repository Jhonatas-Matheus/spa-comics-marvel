import React, { useContext, useEffect, useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { LoadingContext } from "./context/LoadingContext";
import { CharacterResponse, useRequests } from "./hooks/useRequests";
import loadingSpinner from "./assets/spinner/Dual Ring-0.8s-197px.svg";
import ModalComicDetail from "./components/ModalComicDetail";
import { ComicsProvider } from "./context/ComicsContext";
import { HerosContext, HerosProvider } from "./context/HerosContext";
import MyMap from "./components/ModalGoogleMaps";
import { ModalMapsProvider } from "./context/ModalContext";

function App() {
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return <img src={loadingSpinner} alt="" />;
  }
  return (
    <div className="App">
      <HerosProvider>
        <ModalMapsProvider>
          <ComicsProvider>
            <Navbar />
            <Container />
            <ModalComicDetail />
            <MyMap />
          </ComicsProvider>
        </ModalMapsProvider>
      </HerosProvider>
    </div>
  );
}

export default App;
