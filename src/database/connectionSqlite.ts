import path from "path";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export default async function connectionSqlite(): Promise<Database> {
  const dbSqlite = await open({
    filename: path.resolve(__dirname, "..", "database", "database.sqlite"),
    driver: sqlite3.Database,
  });
  return dbSqlite;
}
