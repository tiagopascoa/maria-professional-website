import React from "react";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const linkStyle = {
  color: "#3366CC",
  textDecoration: "underline",
};

const center = { lat: 38.707715904470305, lng: -9.153820181644532 };

const markers = [
  {
    id: 1,
    name: "Clínica de Medicina Tradicional Chinesa de Almada",
    position: { lat: 38.67397248046656, lng: -9.156869663364878 },
  },
  {
    id: 2,
    name: "Clínica de Santos",
    position: { lat: 38.708660981318005, lng: -9.152006325161384 },
  },
  {
    id: 3,
    name: "Clínica dos Eixos",
    position: { lat: 38.756965373971546, lng: -9.14343499596187 },
  },
];

function Map() {
  const [activeMarker, setActiveMarker] = React.useState(null);

  const handleActiveMarker = (markerId) => {
    if (markerId === activeMarker) {
      return;
    }
    setActiveMarker(markerId);
  };

  const activeClinic = markers.find((marker) => marker.id === activeMarker);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap style={containerStyle} defaultCenter={center} defaultZoom={11}>
        {markers.map(({ id, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          />
        ))}
        {activeClinic ? (
          <InfoWindow
            position={activeClinic.position}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div>
              <a
                target="_blank"
                href="https://goo.gl/maps/UcuyC2cMymCX2o9x9"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                {activeClinic.name}
              </a>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </APIProvider>
  );
}

export default Map;
