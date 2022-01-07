import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

//---- Models
import UserModel from "../models/userModel";

//---- Interfaces
import IUser from "../interfaces/user";

dotenv.config();

class AuthValidationController {
  public async createJsonWebToken(user: IUser): Promise<string> {
    return jwt.sign(
      {
        name: user.name,
        email: user.email,
        gifts: user.gifts,
        purchasesHistoric: user.purchasesHistoric,
      },
      String(process.env.JWT_KEY),
      { expiresIn: "14d" }
    );
  }

  public async verifyJsonWebToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    let { token } = req.body;
    if (!token) return res.send(null);
    try {
      let payload = jwt.verify(token, String(process.env.JWT_KEY));
      console.log(payload);
      return next();
    } catch (e) {
      console.error("Token expired");
      return res.send({ error: "token expired" });
    }
  }

  public async verifyAccount(req: Request): Promise<any> {
    const { email } = req.body;

    let user: IUser | null = await UserModel.findOne({ email });

    if (!user) return null;

    return Object(user);
  }
}

class AuthLoginUserController {
  public async login(req: Request) {
    let { password } = req.body;

    let authValidationController = new AuthValidationController();
    let accountUser: IUser | null =
      await authValidationController.verifyAccount(req);

    if (!accountUser) return null;

    let isTheSamePassword = await this.verifyPassword(accountUser, password);
    // console.log("isTheSamePassword: ", isTheSamePassword);

    if (isTheSamePassword)
      return await authValidationController.createJsonWebToken(accountUser);
    else return null;
  }

  private async verifyPassword(
    user: IUser,
    password: string
  ): Promise<boolean> {
    let passwordHash = await bcrypt.compare(password, user.password);
    return passwordHash;
  }
}

class AuthRegisterController {
  private async createHashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  public async registerUser(req: Request): Promise<string | null> {
    let { name, email, password } = req.body;

    let authValidationController = new AuthValidationController();
    let userHaveAccount: IUser | null =
      await authValidationController.verifyAccount(req);

    if (userHaveAccount) return null;

    let modelUser: IUser = {
      name,
      email,
      password: await this.createHashPassword(password),
      address: {},
      purchasesHistoric: [],
      comments: [],
      gifts: [],
    };

    let user: object[] | null = await UserModel.insertMany(modelUser);
    if (!user) return null;

    return await authValidationController.createJsonWebToken(user[0] as IUser);
  }
}

export {
  AuthValidationController,
  AuthLoginUserController,
  AuthRegisterController,
};
