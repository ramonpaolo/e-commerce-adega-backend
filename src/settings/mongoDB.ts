import { connect as conn, Connection } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connect(): Promise<Connection> {
  if ((global as any).conn) return (global as any).conn;
  const urlMongoDB: string = process.env.MONGODB_URL!;
  const db = await (await conn(urlMongoDB, {autoIndex: true})).connection;
  if (!db) {
    new Error("Can't connect to MongoDB");
    console.error("Can't connect to MongoDB");
  }
  (global as any).conn = db;
  return (global as any).conn as Connection;
}

export default connect