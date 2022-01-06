import path from "path";
import firebaseAdmin from "firebase-admin";
import { Request, Response } from "express";
import fs from "fs";

//---- Database
import connectionSqlite from "../database/connectionSqlite";

export default async function uploadImage(req: Request, res: Response) {
  let bucket = firebaseAdmin.storage().bucket();
  let img = req.file;

  if (img == undefined) return res.sendStatus(404);

  let filesSaveds: object[] = await bucket.upload(
    path.resolve(__dirname, "..", "images", img!.filename),
    {
      destination: "images/" + img!.filename,
      contentType: img!.mimetype,
      public: true,
    }
  );

  await removeFile(req.file);

  let lastFile = Object(filesSaveds.pop());

  let idImage = await addOnSqlite(lastFile["mediaLink"]);

  return res.status(200).send({
    idImage: idImage!,
  });
}

async function addOnSqlite(link: string) {
  const conn = await connectionSqlite();

  await conn.run("INSERT INTO uploadImage(urlImage) VALUES(?);", [link]);

  let idImage: string;

  await conn.each(
    "SELECT id FROM uploadImage WHERE urlImage = ?",
    [link],
    (error, rows) => {
      if (error) return;
      idImage = rows["id"];
    }
  );

  await conn.close();
  return idImage!;
}

async function removeFile(pathImg: any) {
  fs.rm(
    path.resolve(__dirname, "..", "images", pathImg.filename.toString()),
    () => {}
  );
}
