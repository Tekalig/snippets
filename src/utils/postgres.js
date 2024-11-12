import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "Hazi@besu21",
  database: "nextjsDb",
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to the database");

  // Your database queries or operations go here

  release(); // Release the client back to the pool
});

export default pool;
