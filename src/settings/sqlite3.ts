import sqlite3 from "sqlite3";
import {open} from "sqlite";
import path from "path";

export default async function exec(): Promise<void> {
  const dbSqlite = await open({
    filename: path.resolve(__dirname, "..", "database", "database.sqlite"),driver: sqlite3.Database
  })
  await dbSqlite.exec(
    "CREATE TABLE IF NOT EXISTS uploadImage(urlImage text not null, id integer primary key autoincrement);"
  );
  await dbSqlite.close();
}
