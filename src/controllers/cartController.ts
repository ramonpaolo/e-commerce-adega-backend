import { Request, Response } from "express";

//---- Models
import UserModel from "../models/userModel";

class CartControllerShow{
    public async showProductsOnCart(req: Request, res: Response): Promise<string[] | null> {
        let dataUser = await UserModel.findOne({email: res.locals.user["email"]})
        if(!dataUser) return null

        return dataUser["cart"]
    }
}

export {CartControllerShow}