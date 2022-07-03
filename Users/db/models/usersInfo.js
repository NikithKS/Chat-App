import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  UserName :{
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  City: {
    type: mongoose.SchemaTypes.ObjectId
  }
});

export const users = mongoose.model('Users', userSchema);
