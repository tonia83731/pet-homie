const SHELTER_URL =
  "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=p9yPwrCs2OtC&IsTransData=1";

export const getAllShelterCondition = async () => {
  try {
    const res = await fetch(`${SHELTER_URL}&rpt_year=113`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
