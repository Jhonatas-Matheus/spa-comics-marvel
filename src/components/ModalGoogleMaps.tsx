import {
  LegacyRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { StyledModalMaps } from "./styles/ModalMaps";
import { ModalMapsContext } from "../context/ModalContext";
import { Button } from "@mui/material";
interface ILocation {
  lat: number;
  lng: number;
}
const MyMap = () => {
  const { showModal: showModalMaps, setShowModal: setShowModalMaps } =
    useContext(ModalMapsContext);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY_GOOGLE as string,
  });
  const getLocationBrownser = () => {
    let cords = {} as ILocation;
    navigator.geolocation.getCurrentPosition((position) => {
      cords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    return cords;
  };
  const [currentLocation, setCurrentLocation] = useState<ILocation>();
  const [currentAddress, setCurrentAddress] = useState<string>("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  }, []);
  const handleCloseModal = () => {
    setShowModalMaps(false);
  };

  return (
    <StyledModalMaps display={showModalMaps}>
      <div className="background" onClick={() => handleCloseModal()}></div>
      <div className="content">
        <h2>Selecione o local para entrega</h2>
        <h3>
          Você pode clicar em algum lugar do mapa para selecionar o destino da
          entrega.
        </h3>
        <div className="map-container">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              center={currentLocation}
              zoom={10}
              clickableIcons={true}
              onDblClick={(e: google.maps.MapMouseEvent) => {
                const jsonCords = JSON.stringify(e.latLng);
                console.log(JSON.parse(jsonCords));
                setCurrentLocation(JSON.parse(jsonCords));
                const geocode = new google.maps.Geocoder();
                geocode.geocode(
                  { location: JSON.parse(jsonCords) },
                  (results) => {
                    if (results) {
                      setCurrentAddress(results[0].formatted_address);
                    }
                  }
                );
              }}
            >
              <Marker
                position={
                  currentLocation ? currentLocation : getLocationBrownser()
                }
                options={{
                  label: {
                    text: "Local de entrega",
                    className: "map-marker",
                  },
                }}
              />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
        <p>Endereço: {currentAddress}</p>

        <Button
          variant="contained"
          onClick={() => {
            const geocode = new google.maps.Geocoder();
            console.log(
              geocode.geocode({ location: currentLocation }, (results) => {
                if (results) {
                  console.log(results[0].formatted_address);
                  setCurrentAddress(results[0].formatted_address);
                }
              })
            );
          }}
        >
          Confrimar endereço
        </Button>
      </div>
    </StyledModalMaps>
  );
};

export default MyMap;
