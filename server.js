import http from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;

let data = await getDataFromDB();

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const params = req.url.split("/");
    const continent = params.pop();
    data = data.filter((d) =>
      d.continent.toLowerCase().includes(continent.toLowerCase()),
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "not found",
        message: "The requested route does not exist",
      }),
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
