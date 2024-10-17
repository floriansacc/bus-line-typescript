export interface RouteInfoItemModel {
  msgHeader: MessageHeader;
  msgBody: MessageBody;
}

export const routeInfoItemFromJson = (json: any): RouteInfoItemModel => {
  return {
    msgHeader: msgHeaderFromJson(json.msgHeader),
    msgBody: msgBodyFromJson(json.msgBody),
  };
};

interface MessageHeader {
  headerMsg: string;
  headerCd: string;
  itemCount: number;
}

const msgHeaderFromJson = (json: any): MessageHeader => {
  return {
    headerCd: json.headerCd,
    headerMsg: json.headerMsg,
    itemCount: json.itemCount,
  };
};

interface MessageBody {
  itemList: itemList[];
}

const msgBodyFromJson = (json: any): MessageBody => {
  return { itemList: itemListFromJsonList(json.itemList) };
};

interface itemList {
  busRouteId: string;
  busRouteNm: string;
  busRouteAbrv: string;
  length: string;
  routeType: string;
  stStationNm: string;
  edStationNm: string;
  term: string;
  lastBusYn: string;
  lastBusTm: string;
  firstBusTm: string;
  lastLowTm: string;
  firstLowTm: string;
  corpNm: string;
}

const itemListFromJson = (json: any): itemList => {
  return {
    busRouteId: json.busRouteId,
    busRouteNm: json.busRouteNm,
    busRouteAbrv: json.busRouteAbrv,
    length: json.length,
    routeType: json.routeType,
    stStationNm: json.stStationNm,
    edStationNm: json.edStationNm,
    term: json.term,
    lastBusYn: json.lastBusYn,
    lastBusTm: json.lastBusTm,
    firstBusTm: json.firstBusTm,
    lastLowTm: json.lastLowTm,
    firstLowTm: json.firstLowTm,
    corpNm: json.corpNm,
  };
};

const itemListFromJsonList = (list: any[]): itemList[] => {
  return list.map((e) => itemListFromJson(e));
};
