import express from "express";

import ShopControllerShow from "../controllers/shopController";

const app = express();

app.get("/shop", async (req, res) =>
  res.send(await ShopControllerShow.getData(req, res))
);

export default app;
