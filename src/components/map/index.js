import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const key = "AIzaSyBKuGXQgVDu29LnLwAhAM25-i8mePBCT90";

const MapWithAMarker = withScriptjs(
  withGoogleMap(({ data = [], handleClick, zoom, location }) => (
    <GoogleMap defaultZoom={zoom} defaultCenter={location}>
      {data.map((item) => (
        <Marker
          key={item.id}
          position={{
            lat: item.location.latitude,
            lng: item.location.longitude,
          }}
          title={`${item.city ? `${item.city} - ` : ""}${item.name}`}
          onClick={() => handleClick(item)}
        />
      ))}
    </GoogleMap>
  ))
);

const Map = ({ networks, handleClick }) => {
  return (
    <section>
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        data={networks.data}
        handleClick={handleClick}
        zoom={networks.zoom}
        location={networks.location}
      />
    </section>
  );
};

export default Map;
