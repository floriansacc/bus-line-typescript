import { useEffect, useState } from "react";
import useGetRouteInfoItem from "./hooks/useGetRouteInfoItem";
import useKakaoMapRestApi from "./hooks/useKakaoMapRestApi";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function App() {
  // const { routeInfo } = useGetRouteInfoItem();
  // console.log(routeInfo);
  // const { test } = useKakaoMapRestApi();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-[300px] w-[300px] border border-solid border-black">
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          className="h-full w-full"
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: "#000" }}>Hello World!</div>
          </MapMarker>
        </Map>
      </div>
    </div>
  );
}
