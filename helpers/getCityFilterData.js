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
