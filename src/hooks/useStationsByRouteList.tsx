import { useEffect, useState } from "react";
import {
  StationsByRouteList,
  stationsByRouteListFromJson,
} from "../models/bus-api/StationsByRouteList";

const baseUrl: string =
  "http://ws.bus.go.kr/api/rest/busRouteInfo/getStaionByRoute?";
const busLineQuery: number = 100100112;

const basicParams: { [key: string]: string } = {
  resultType: "json",
  ServiceKey: import.meta.env.VITE_DATA_KR_API_KEY ?? "",
  busRouteId: busLineQuery.toString(),
};

const urlParams = new URLSearchParams(basicParams);

export default function useStationsByRouteList() {
  const [stationsList, setStationsList] = useState<StationsByRouteList | null>(
    null,
  );

  useEffect(() => {
    const getStationsByRouteList = async (): Promise<void> => {
      const fetchUrl = `${baseUrl}${urlParams.toString()}`;
      try {
        const response = await fetch(fetchUrl, {
          headers: {
            // Accept: "application / json",
          },
          credentials: "include",
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`error`);
        }
        const jsonResponse = await response.json();

        const toReturn: StationsByRouteList =
          stationsByRouteListFromJson(jsonResponse);
        setStationsList(toReturn);
      } catch (error) {
        console.log(error);
      }
    };

    getStationsByRouteList();
  }, []);

  return { stationsList };
}
