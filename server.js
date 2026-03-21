import http from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;

const data = await getDataFromDB();

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.end(JSON.stringify(data));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
