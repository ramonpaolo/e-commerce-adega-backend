import express from "express";
import cors from "cors";
import os from "os";
import dotenv from "dotenv";

//---- Routes
import shopRoutes from "./routes/shop";
import adminRoutes from "./routes/admin";
import cartRoutes from "./routes/cart";
import authenticationRoutes from "./routes/authentication";

//---- Settings
import connect from "./settings/mongoDB";
import firebase from "./settings/firebase";
import sqlite from "./settings/sqlite3";
import { AuthValidationController } from "./controllers/authController";

const ip = os.networkInterfaces()["Ethernet 2"]![1]["address"];

const port = process.env.PORT || 5000;

dotenv.config();

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
app.use(authenticationRoutes);
app.use(new AuthValidationController().verifyJsonWebToken, cartRoutes);

app.listen(port, () => console.log(`${ip}:${port}`));
