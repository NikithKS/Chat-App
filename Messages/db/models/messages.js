import mongoose from "mongoose";

const messagesSchema = mongoose.Schema({
  User: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  Time: {
    type: Date,
    default: Date.now()
  },
  Content: {
    type: String,
    required: true
  }
});

export const messages = mongoose.model('Messages', messagesSchema);
