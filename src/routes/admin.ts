import express from "express";
import AdminController from "../controllers/adminController";
import multer from "multer";
import path from "path";
import uploadImage from "../services/uploadImage";

const app = express();

const confiMulter = multer.diskStorage({
  //Executado quando pega o arquivo
  destination: (req, file, cb) => {
    //  console.log(file, "destination")
    //console.log(path.resolve(__dirname, "..", "images"));
    cb(null, path.resolve(__dirname, "..", "images"));
  },
  //Executado quando pega a cb de destination e vai salvar o arquivo
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

app.post(
  "/uploadImage",
  multer({ storage: confiMulter }).single("img"),
  uploadImage
);

app.post("/admin", AdminController.addDrink);

export default app;
