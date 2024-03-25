import taipeiClinic from "../datas/taipeiClinic.json";
import newTaipeiClinic from "../datas/newTaipeiClinic.json";
import chayiClinic from "../datas/chayiClinic.json";
import miaoliClinic from "../datas/miaoliClinic.json";

export const getTaipeiClinic = async () => {
  try {
    const res = await taipeiClinic;
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

export const getNewTaipeiClinic = async () => {
  try {
    const res = await newTaipeiClinic;
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

export const getChayiClinic = async () => {
  try {
    const res = await fetch(
      "https://s5.aconvert.com/convert/p3r68-cdx67/u9oag-cl527.json"
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getTainanClinic = async () => {
  try {
    const res = await fetch(
      "https://soa.tainan.gov.tw/Api/Service/GetJsonLd/f3baa10c-93ec-4bc5-b526-00959a5168ab"
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getMiaoliClinic = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
