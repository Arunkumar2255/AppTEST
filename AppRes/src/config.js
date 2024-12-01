import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "10.0.64.2",
  user: process.env.DATABASE_USER || "admin_user",
  password: process.env.DATABASE_PASSWORD || "StrongPassword123",
  database: process.env.DATABASE_NAME || "TestDB",
  port: process.env.DATABASE_PORT || 3306,
};

export const port = process.env.PORT || 4000;

export const SECRET = process.env.SECRET || 'some secret key';
