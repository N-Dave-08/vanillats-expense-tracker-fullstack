import http from "http";
import { pool } from "./db/db.js";

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-TYpe", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  //   GET all transactions
  if (req.url === "/transactions" && req.method === "GET") {
    const result = await pool.query(
      "SELECT * FROM transactions ORDER BY id DESC",
    );

    res.writeHead(200);
    return res.end(JSON.stringify(result.rows));
  }

  //   POST transaction
  if (req.url === "/transactions" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => (body += chunk));

    req.on("end", async () => {
      const { description, amount, type } = JSON.parse(body);

      const result = await pool.query(
        "INSERT INTO transactions (description, amount, type) VALUES ($1, $2, $3) RETURNING *",
        [description, amount, type],
      );

      res.writeHead(201);
      res.end(JSON.stringify(result.rows[0]));
    });

    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ message: "Not Found" }));
});

server.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
