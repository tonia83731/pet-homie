import twCityDistricts from "@/datas/twCityDistricts.json";

export const getAreaCode = () => {
  const cityList = [
    "臺北市",
    "新北市",
    "基隆市",
    "宜蘭縣",
    "桃園市",
    "新竹縣",
    "新竹市",
    "苗栗縣",
    "臺中市",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義縣",
    "嘉義市",
    "臺南市",
    "高雄市",
    "屏東縣",
    "花蓮縣",
    "臺東縣",
    "澎湖縣",
    "金門縣",
    "連江縣",
  ];
  const cityCode = cityList.map((city, index) => {
    return {
      label: city,
      value: index + 2,
    };
  });
  return cityCode;
};

export const animal_kind_options = [
  { value: "狗", label: "狗" },
  { value: "貓", label: "貓" },
  { value: "其他", label: "其他" },
];

export const animal_sex_options = [
  { value: "M", label: "公" },
  { value: "F", label: "母" },
  { value: "N", label: "未輸入" },
];

export const animal_bodytype_options = [
  { value: "SMALL", label: "小型" },
  { value: "MEDIUM", label: "中型" },
  { value: "BIG", label: "大型" },
];

export const animal_age_options = [
  { value: "CHILD", label: "幼年" },
  { value: "ADULT", label: "成年" },
];

export const animal_health_status_options = [
  { value: "T", label: "是" },
  { value: "F", label: "否" },
  { value: "N", label: "未輸入" },
];
