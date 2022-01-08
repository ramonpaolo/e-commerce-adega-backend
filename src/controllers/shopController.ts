//---- Databases
import { Request, Response } from "express";
import IDrink from "../interfaces/drink";
import DrinkModel from "../models/drinkModel";

//---- Settings
import connect from "../settings/mongoDB";

class ShopControllerShow {
  public async getData(req: Request, res: Response): Promise<Object[]> {
    const conn = await connect();
    if (req.query.drink == null)
      return await conn.collection("drinks").find().toArray();
    else
      return await conn
        .collection("drinks")
        .find({
          $text: {
            $search: req.query.drink.toString(),
          },
        })
        .toArray();
  }
  public async getProductById(
    idProduct: string
  ): Promise<IDrink | null | undefined> {
    return await DrinkModel.findById(idProduct);
  }
}

export default new ShopControllerShow();
