import mongoose from "mongoose";

const User = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
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
    minlength: 8,
    maxlength: 24,
  },
  comments: {
    type: Array,
  },
  gifts: {
    type: Array,
  },
  type: Array,
  searchHistoric: {
  },
  purchasesHistoric: {
    type: Array,
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
