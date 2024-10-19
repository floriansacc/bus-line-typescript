import { useEffect, useState } from "react";
import {
  routeInfoItemFromJson,
  RouteInfoItemModel,
} from "../models/bus-api/RouteInfoItem";

const baseUrl: string =
  "http://ws.bus.go.kr/api/rest/busRouteInfo/getRouteInfo?";

const busLineQuery: number = 100100112;

const basicParams: { [key: string]: string } = {
  resultType: "json",
  ServiceKey: import.meta.env.VITE_DATA_KR_API_KEY ?? "",
  busRouteId: busLineQuery.toString(),
};

const urlParams = new URLSearchParams(basicParams);

export default function useRouteInfoItem() {
  const [routeInfo, setRouteInfo] = useState<RouteInfoItemModel | null>(null);

  useEffect(() => {
    const getRouteInfoItem = async (): Promise<void> => {
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
        const toReturn: RouteInfoItemModel =
          routeInfoItemFromJson(jsonResponse);
        setRouteInfo(toReturn);
      } catch (error) {
        console.log(error);
      }
    };

    getRouteInfoItem();
  }, []);

  return { routeInfo };
}
