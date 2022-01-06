import express from "express";
import cors from "cors";
import os from "os";

//---- Routes
import shopRoutes from "./routes/shop";
import adminRoutes from "./routes/admin";

//---- Settings
import connect from "./settings/mongoDB";
import firebase from "./settings/firebase";
import sqlite from "./settings/sqlite3";

const ip = os.networkInterfaces()["Ethernet 2"]![1]["address"];

const port = process.env.PORT || 5000;

connect();
firebase;
sqlite();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({ origin: "*", allowedHeaders: ["Content-Type", "Authorization"] })
);

app.use(shopRoutes);
app.use(adminRoutes);

app.listen(port, () => console.log(`${ip}:${port}`));
