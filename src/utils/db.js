import pool from "./postgres";

async function query(text, params) {
  const { rows } = await pool.query(text, params);
  return rows;
}

export default query;
