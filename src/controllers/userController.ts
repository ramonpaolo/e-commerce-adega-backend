import { Request, Response } from "express";

//---- Models
import UserModel from "../models/userModel";

// class UserControllerShow {
//   public async getName(req: Request, res: Response) {}
//   public async getEmail(req: Request, res: Response) {}
//   public async getImage(req: Request, res: Response) {}
//   public async getComments(req: Request, res: Response) {}
// }

class UserControllerUpdate {
  public async updateName(req: Request, res: Response) {}
  public async updateEmail(req: Request, res: Response) {}
  public async updatePassword(req: Request, res: Response) {}
  public async updateImage(req: Request, res: Response) {}
  public async excludeComment(req: Request, res: Response) {}

  public async addProductOnCart(req: Request, res: Response): Promise<boolean> {
    try {
      await UserModel.updateOne(
        { email: res.locals.user.email },
        {
          $push: {
            cart: req.params.idProduct,
          },
        }
      );
      return true;
    } catch (e) {
      return false;
    }
  }
  public async removeProductOnCart(
    req: Request,
    res: Response
  ): Promise<boolean> {
    try {
      await UserModel.updateOne(
        { email: res.locals.user.email },
        {
          $pull: {
            cart: req.params.idProduct,
          },
        }
      );
      return true;
    } catch (e) {
      return false;
    }
  }
}

export { UserControllerUpdate };
