export const getTitleWithSlice = (string) => {
  const startIndex = string.indexOf("%22") + 3;
  const endIndex = string.indexOf("%22", startIndex);
  return string.slice(startIndex, endIndex);
};
