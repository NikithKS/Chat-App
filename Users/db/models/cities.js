import mongoose from "mongoose";

const citySchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  PinCode: {
    type: Number
  },
  Country: {
    type: String
  }
})

export const cities = mongoose.model('City', citySchema);
