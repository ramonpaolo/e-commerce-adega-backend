import express from "express";

//---- Controllers
import ShopControllerShow from "../controllers/shopController";

//---- Interfaces
import IDrink from "../interfaces/drink";

const app = express();

app.get("/shop", async (req, res) =>
  res.send(await ShopControllerShow.getData(req, res))
);

app.get("/shop/:idProduct", async (req, res) => {
  let product: IDrink | null | undefined = await ShopControllerShow.getProductById(
    req.params.idProduct
  );
  if (!product) return res.status(404).send({
    status: "error",
  });;
    return res.status(200).send({
      status: "success",
      data: Object(product),
      codeProduct: req.params.idProduct,
    });
});

export default app;
