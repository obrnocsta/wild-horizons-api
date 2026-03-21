import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSON } from "./utils/sendJSON.js";
import { filterByParams } from "./utils/filterByParams.js";
import { filterByQueries } from "./utils/filterByQueries.js";

const PORT = 8000;

const data = await getDataFromDB();

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const queries = Object.fromEntries(url.searchParams);

  if (url.pathname === "/api" && req.method === "GET") {
    const dataFiltered = filterByQueries(queries, data);
    sendJSON(res, 200, dataFiltered);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const dataFiltered = filterByParams(req, data);
    sendJSON(res, 200, dataFiltered);
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const dataFiltered = filterByParams(req, data);
    sendJSON(res, 200, dataFiltered);
  } else {
    const error = {
      error: "not found",
      message: "The requested route does not exist",
    };
    sendJSON(res, 404, error);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
