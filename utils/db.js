import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function createDbConnection() {

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // Test the connection
    await db.query('SELECT 1');
    console.log('Connected to database');

    return db;
  } catch (err) {
    console.error('Error connecting to database:', err);
    throw err;
  }
}

export { createDbConnection };
