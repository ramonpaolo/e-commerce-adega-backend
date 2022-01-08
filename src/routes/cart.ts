import express from "express";

//---- Controllers
import { CartControllerShow } from "../controllers/cartController";
import { UserControllerUpdate } from "../controllers/userController";

const app = express();

app.get("/cart", async (req, res) =>
  res.send(await new CartControllerShow().showProductsOnCart(req, res))
);

app.put("/cart/:idProduct", async (req, res) => {
  let ok: boolean = await new UserControllerUpdate().addProductOnCart(req, res);
  if (ok)
    return res.status(200).send({
      status: "success",
      message: `product ${req.params.idProduct} was added on cart`,
      codeProduct: req.params.idProduct,
    });
  return res.status(404).send({
    status: "error",
  });
});

app.delete("/cart/:idProduct", async (req, res) => {
  let ok: boolean = await new UserControllerUpdate().removeProductOnCart(
    req,
    res
  );
  if (ok)
    return res.status(200).send({
      status: "success",
      message: `product ${req.params.idProduct} was removed on cart`,
      codeProduct: req.params.idProduct,
    });
  return res.status(404).send({
    status: "error",
  });
});

export default app;
