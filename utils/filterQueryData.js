export const filterQueryData = (data, path) => {
  const params = Object.fromEntries(path.searchParams)
  const { name, location, country, continent, is_open_to_public } = params
  if (name) data = data.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase())
  })
  if (location) data = data.filter(item => {
    return item.location.toLowerCase().includes(location.toLowerCase())
  })
  if (country) data = data.filter(item => {
    return item.country.toLowerCase().includes(country.toLowerCase())
  })
  if (continent) data = data.filter(item => {
    return item.continent.toLowerCase().includes(continent.toLowerCase())
  })
  if (is_open_to_public) data = data.filter(item => {
    return item.is_open_to_public === Boolean(is_open_to_public.toLowerCase())
  })
  return data
}