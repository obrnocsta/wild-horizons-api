import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSON } from "./sendJSON.js";

const PORT = 8000;

const data = await getDataFromDB();

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    sendJSON(res, 200, data);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const params = req.url.split("/");
    const continent = params.pop().replace("%20", " ");
    console.log(continent);
    const dataFiltered = data.filter((d) =>
      d.continent.toLowerCase().includes(continent.toLowerCase()),
    );
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
