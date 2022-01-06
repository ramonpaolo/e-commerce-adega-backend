import { Request, Response } from "express";

//---- Databases
import connectionSqlite from "../database/connectionSqlite";

//---- Models
import DrinkModel from "../models/drinkModel";

class AdminController {
  public async addDrink(req: Request, res: Response) {
    const {
      name,
      brand,
      capacity,
      price,
      quantity,
      description,
      idImage,
    }: any = req.body;
    //const img = await this.searchUrlImage(idImage as number)

    //await this.deleteUrlImageFromDatabase(parseInt(idImage));

    const dbSqlite = await connectionSqlite();

    let urlImage = await new Promise(async (resolve, reject) => {
      await dbSqlite.each(
        "SELECT urlImage FROM uploadImage where id = ?",
        [idImage as number],
        async (error, row) => {
          if (error) return reject(await error);
          return resolve(await row["urlImage"]);
        }
      );
    });

    await dbSqlite.run("delete from uploadImage where id = ?", [
      idImage as number,
    ]);

    await dbSqlite.close();

    console.log("url image: ", urlImage);

    try {
      await DrinkModel.create({
        name,
        img: urlImage,
        brand,
        capacity,
        price,
        quantity,
        description,
      });
      req.app.locals.destination = "";
      return res.sendStatus(200);
    } catch (e) {
      console.error(e);
      return res.sendStatus(404);
    }
  }

  private async searchUrlImage(idImage: any): Promise<string> {
    console.log("searchUrlImage AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    let dbSqlite = await connectionSqlite();
    let urlImage: string;
    await dbSqlite.each(
      "SELECT urlImage FROM uploadImage where id = ?",
      [idImage as number],
      (error, rows) => {
        if (!error) return;
        console.log(rows);
        urlImage = rows["urlImage"];
      }
    );
    await dbSqlite.close();
    return urlImage!;
    //req.app.locals.destination
  }

  private async deleteUrlImageFromDatabase(idImage: any): Promise<void> {
    let dbSqlite = await connectionSqlite();
    await dbSqlite.run("delete from uploadImage where id = ?", [
      idImage as number,
    ]);
    await dbSqlite.close();
  }
}

export default new AdminController();
