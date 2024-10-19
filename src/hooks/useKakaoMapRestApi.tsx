import { useEffect, useState } from "react";

const baseUrl: string = "https://dapi.kakao.com/v2/local/search/address.json?";

const basicParams: { [key: string]: string } = {
  query: "여의대방로 216",
};

const urlParams = new URLSearchParams(basicParams);

export default function useKakaoMapRestApi() {
  const [test, setTest] = useState();

  useEffect(() => {
    const getKakaoMap = async (): Promise<void> => {
      const fetchUrl = `${baseUrl}${urlParams.toString()}`;
      try {
        const response = await fetch(fetchUrl, {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
            "content-type": "application/json;charset=UTF-8",
          },
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`error`);
        }
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      } catch (error) {
        console.log(error);
      }
    };

    getKakaoMap();
  }, []);

  return { test };
}
