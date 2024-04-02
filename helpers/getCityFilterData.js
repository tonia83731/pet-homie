import twCityDistricts from "@/datas/twCityDistricts.json";

export const getCityOptions = () => {
  const city = twCityDistricts.map((data) => {
    return {
      label: data.city,
      value: data.city,
    };
  });
  return city;
};

export const getDistrictOptions = (city) => {
  const data = twCityDistricts.filter((data) => data.city === city);
  const districtsList = data[0].districts;
  const districtOptions = districtsList.map((dis) => {
    return {
      label: dis.name,
      value: dis.name,
    };
  });
  // .map((dis) => {
  //   console.log(dis);
  //   return {
  //     label: dis.name,
  //     value: dis,
  //   };
  // });
  // return districts;
  return districtOptions;
};
