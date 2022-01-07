import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 80,
  },
  img: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 80,
  },
  password: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    default: [],
  },
  gifts: {
    type: Array,
    default: [],
  },
  searchHistoric: {
    type: Array,
  },
  purchasesHistoric: {
    type: Array,
    default: [],
  },
  address: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const UserModel = mongoose.model("User", User);

export default UserModel;
