export const filterByQueries = (queries, data) => {
  let dataFiltered = data;
  const { continent, country, is_open } = queries;
  if (continent) {
    dataFiltered = dataFiltered.filter((d) =>
      d.continent.toLowerCase().includes(continent.toLowerCase()),
    );
  }
  if (country) {
    dataFiltered = dataFiltered.filter((d) =>
      d.country.toLowerCase().includes(country.toLowerCase()),
    );
  }
  if (is_open) {
    dataFiltered = dataFiltered.filter(
      (d) => d.is_open === JSON.parse(is_open.toLowerCase()),
    );
  }
  return dataFiltered;
};
