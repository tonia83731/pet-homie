const ADOPT_URL =
  "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL";

export const getAllAdoptData = async (top, skip) => {
  try {
    const res = await fetch(
      `${ADOPT_URL}&$top=${top}&$skip=${skip}&$filter=animal_status=OPEN`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// export const getAdoptDataByCondition = async (top, skip, condition) => {
//   try {
//     const res = await fetch(
//       `${ADOPT_URL}&$top=${top}&$skip=${skip}&$filter=animal_status=OPEN&${condition}`
//     );
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
// filter by... animal_area_pkid, animal_kind, animal_bodytype, animal_age
