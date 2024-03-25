import taipeiClinic from "../datas/taipeiClinic.json";
import newTaipeiClinic from "../datas/newTaipeiClinic.json";
import chayiClinic from "../datas/chayiClinic.json";
import miaoliClinic from "../datas/miaoliClinic.json";
import { getTitleWithSlice } from "@/helpers/getTitleWithSlice";

export const getTaipeiClinic = () => {
  try {
    const res = taipeiClinic;
    const datas = res.map((data) => {
      return {
        name: data["動物醫院名稱"],
        address: data["縣市"] + data["地址"],
        phone: "(02) " + data["電話"],
      };
    });
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export const getNewTaipeiClinic = () => {
  try {
    const res = newTaipeiClinic;
    const datas = res.map((data) => {
      const { name, address, tel } = data;
      return {
        name: name,
        address: address,
        phone: "(02) " + tel,
      };
    });
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export const getHsinchuClinic = async () => {
  try {
    const res = await fetch(
      "https://odws.hccg.gov.tw/001/Upload/25/opendataback/9059/120/35ee3431-7188-437b-8278-e7ad9cb31d4b.json"
    );
    const resJ = await res.json();
    const datas = resJ.map((data) => {
      return {
        name: data["機構名稱"],
        address: data["機構地址"],
        phone: data["機構電話"],
      };
    });
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export const getChayiClinic = () => {
  try {
    const res = chayiClinic;
    const datas = res.map((data) => {
      return {
        name: data["醫院名稱"],
        address: data["住址"],
        phone: data["電話"],
      };
    });
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export const getTainanClinic = async () => {
  try {
    const res = await fetch(
      "https://soa.tainan.gov.tw/Api/Service/GetJsonLd/f3baa10c-93ec-4bc5-b526-00959a5168ab"
    );
    const resJ = await res.json();
    const datas = resJ["@graph"].map((data) => {
      const { Name } = data;
      const name = getTitleWithSlice(Name);
      return {
        name,
        address: "臺南市" + data.StreetDoorPlate,
        phone: data["機構電話"],
      };
    });
    return datas;
  } catch (error) {
    console.log(error);
  }
};

export const getMiaoliClinic = () => {
  try {
    const res = miaoliClinic;
    const datas = res.map((data) => {
      return {
        name: data["機構名稱"],
        address: data["機構地址"],
        phone: data["機構電話"],
      };
    });
    return datas;
  } catch (error) {
    console.log(error);
  }
};
