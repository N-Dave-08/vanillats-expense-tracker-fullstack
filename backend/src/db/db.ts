import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "expense_db",
  password: "postgres",
  port: 5432,
});
