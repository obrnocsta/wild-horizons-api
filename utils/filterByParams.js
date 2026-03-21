export const filterByParams = (req, data) => {
  let dataFiltered = data;
  const params = req.url.split("/");
  const key = params[2];
  const value = params[3].replace("%20", " ");
  dataFiltered = data.filter((d) =>
    d[key].toLowerCase().includes(value.toLowerCase()),
  );
  return dataFiltered.length > 0
    ? dataFiltered
    : {
        error: "not found",
        message: `The request '${value}' in '${key}' does not exist`,
      };
};
