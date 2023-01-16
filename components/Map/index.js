import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
/* import { mapStyles } from "../../util/mapStyles"; */

const containerStyle = {
  width: "100%",
  height: "100%",
  /* borderRadius: "0.5rem", */
};

const linkStyle = {
  color: "#3366CC",
  textDecoration: "underline",
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = React.useMemo(
    () => ({ lat: 38.707715904470305, lng: -9.153820181644532 }),
    []
  );

  const markers = [
    {
      id: 1,
      name: "Bells and Springs, Lisboa",
      position: { lat: 38.707715904470305, lng: -9.153820181644532 },
    },
  ];

  const [activeMarker, setActiveMarker] = React.useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // useful for multiple markers
  /* const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  }; */

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      /* onLoad={handleOnLoad} */
      zoom={13}
      /* options={{styles: mapStyles}} */
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <a
                  target="_blank"
                  href="https://goo.gl/maps/UcuyC2cMymCX2o9x9"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  {name}
                </a>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
