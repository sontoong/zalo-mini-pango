import { divIcon, LatLngTuple } from "leaflet";
import React, { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import LocationPinIcon from "../../static/icons/location-pin-icon.png";
import MapLocateIcon from "../../static/icons/map-locate-icon.png";
import { Button } from "./button";

export const Map: FC<Props> = ({ lat, long, centerButton = true }) => {
  const position = [lat, long] as LatLngTuple;

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="size-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={divIcon({
          html: renderToStaticMarkup(
            <img
              src={LocationPinIcon}
              className="-translate-x-1/2 -translate-y-1/2"
            />,
          ),
          iconSize: [0, 0],
        })}
        position={position}
      >
        <Popup>
          lat: {position[0]}, long: {position[1]}
        </Popup>
      </Marker>
      {centerButton ? <RecenterButton position={position} /> : null}
    </MapContainer>
  );
};

const RecenterButton = ({ position }: { position: LatLngTuple }) => {
  const map = useMap();

  const handleRecenter = () => {
    map.setView(position, 13);
  };

  return (
    <Button.Icon
      icon={<img src={MapLocateIcon} />}
      onClick={handleRecenter}
      className="absolute right-[16px] top-[calc(100%-150px)] z-[999] size-[36px] !rounded-[8px] border border-stroke1 bg-white"
      style={{ boxShadow: "0px 1px 12px 0px #00000033" }}
    />
  );
};

type Props = { lat: number; long: number; centerButton?: boolean };
