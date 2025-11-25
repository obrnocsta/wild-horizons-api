export const filterData = (req, data, property) => {
  const param = req.url.split('/').pop().replace('%20', ' ')
  data = data.filter(destination => {
    return destination[property].toLowerCase() === param.toLowerCase()
  })
  return data
}