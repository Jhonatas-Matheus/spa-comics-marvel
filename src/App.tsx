import React, { useContext, useEffect, useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { LoadingContext } from "./context/LoadingContext";
import { CharacterResponse, useRequests } from "./hooks/useRequests";
import ModalComicDetail from "./components/ModalComicDetail";
import { ComicsProvider } from "./context/ComicsContext";
import { HerosContext, HerosProvider } from "./context/HerosContext";
import MyMap from "./components/ModalGoogleMaps";
import { ModalMapsProvider } from "./context/ModalContext";
import { StyledLoadingPage } from "./components/styles/LoadingPage";
import LoadingPage from "./components/LoadingPage";
import Sidebar from "./components/Sidebar";
import { SideBarProvider } from "./context/SideBarContext";

function App() {
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="App">
      <HerosProvider>
        <ModalMapsProvider>
          <ComicsProvider>
            <SideBarProvider>
              <Navbar />
              <Sidebar />
              <Container />
              <ModalComicDetail />
              <MyMap />
            </SideBarProvider>
          </ComicsProvider>
        </ModalMapsProvider>
      </HerosProvider>
    </div>
  );
}

export default App;
