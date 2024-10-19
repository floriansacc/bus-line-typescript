import { useEffect, useState } from "react";
import {
  RoutePathListModel,
  routePathListModelFromJson,
} from "../models/bus-api/RoutePathList";

const baseUrl: string =
  "http://ws.bus.go.kr/api/rest/busRouteInfo/getRoutePath?";

const busLineQuery: number = 100100112;

const basicParams: { [key: string]: string } = {
  resultType: "json",
  ServiceKey: import.meta.env.VITE_DATA_KR_API_KEY ?? "",
  busRouteId: busLineQuery.toString(),
};

const urlParams = new URLSearchParams(basicParams);

export default function useRoutePathList() {
  const [routePathList, setRoutePathList] = useState<RoutePathListModel | null>(
    null,
  );

  useEffect(() => {
    const getRoutePathList = async (): Promise<void> => {
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
        const toReturn: RoutePathListModel =
          routePathListModelFromJson(jsonResponse);
        setRoutePathList(toReturn);
      } catch (error) {
        console.log(error);
      }
    };

    getRoutePathList();
  }, []);

  return { routePathList };
}
