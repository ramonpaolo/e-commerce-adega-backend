import express from "express";

//---- Controllers
import {
  AuthLoginUserController,
  AuthRegisterController,
} from "../controllers/authController";

const app = express();

app.post("/login", async (req, res) => {
  let token: string | null = await new AuthLoginUserController().login(req);
  if (!token) return res.status(201).send({ error: "user not exists" });

  return res.status(200).send({ success: 200, token });
});

app.post("/register", async (req, res) => {
  let user = await new AuthRegisterController().registerUser(req);
  if (!user) return res.status(201).send({ error: "user exists" });

  return res.status(200).send({ success: 200, user });
});

export default app;
