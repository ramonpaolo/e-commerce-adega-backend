//---- Databases
import { Request, Response } from "express";

//---- Settings
import connect from "../settings/mongoDB";

class ShopControllerShow {
  async getData(req: Request, res: Response): Promise<Object[]> {
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
}

export default new ShopControllerShow();
