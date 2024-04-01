const STRAY_URL =
  "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=IFJomqVzyB0i";

export const getStrayAnnounce = async (top, skip) => {
  try {
    const res = await fetch(`${STRAY_URL}&$top=${top}&$skip=${skip}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
