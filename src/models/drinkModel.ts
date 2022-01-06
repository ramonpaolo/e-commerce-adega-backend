import mongoose from "mongoose";

const Drink = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 80,
  },
  img: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 80,
  },
  capacity: {
    type: Number,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: Object,
    required: true,
  },
  comments: {
    type: Array,
    default: []
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const DrinkModel =  mongoose.model("Drink", Drink)

export default DrinkModel
