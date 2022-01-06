import { Request, Response } from "express";

class AuthValidationController {
  async verifyPassword(password: string) {
    return password;
  }

  async verifyAccount(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email == "ramonpaolomaran12@gmail.com" && password == "doce")
      return res.send("usuário Autenticado com sucesso");
    else return res.redirect("/");
  }
}

class AuthLoginUserController {}

class AuthRegisterController {}

class AuthCreateUserController {}