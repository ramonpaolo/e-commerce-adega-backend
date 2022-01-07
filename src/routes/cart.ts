import express from "express"

import {AuthValidationController} from "../controllers/authController"

const app = express()

const authValidationController = new AuthValidationController();

app.get("/cart", async (req, res) => res.send({"cart": [{name: "Biscoito"}]}))

export default app