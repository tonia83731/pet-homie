const ADOPT_URL =
  "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL";

export const getAllAdoptData = async () => {
  try {
    const res = await fetch(`${ADOPT_URL}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAdoptDataByNumbers = async (top, skip) => {
  try {
    const res = await fetch(
      `${ADOPT_URL}&$top=${top}&$skip=${skip}&animal_status=OPEN`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAdoptDataByAnimalId = async (id) => {
  try {
    const res = await fetch(`${ADOPT_URL}&$top=10&$skip=0&animal_id=${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
// export const getAdoptDataByParams = async (id) => {
//   try {
//     const allData = await getAllAdoptData();
//     const data = allData.filter((item) => item.animal_id === id);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// filter by... animal_area_pkid, animal_kind, animal_bodytype, animal_age
