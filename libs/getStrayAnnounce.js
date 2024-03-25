const STRAY_URL =
  "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=IFJomqVzyB0i";

export const getStrayAnnounce = async () => {
  try {
    const res = await fetch(`${STRAY_URL}&$top=20`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
