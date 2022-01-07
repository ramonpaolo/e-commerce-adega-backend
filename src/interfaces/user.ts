import { ObjectId } from "mongoose";

interface IUser{
    comments: object[],
    gifts: object[],
    purchasesHistoric: object[],
    _id?: ObjectId,
    name: string,
    email: string,
    password: string,
    createdAt?: Date,
    address: object;
  }

  export default IUser;