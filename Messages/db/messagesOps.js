import mongoose from "mongoose";
import {messages} from "./models/messages.js";

const DbUrl = "mongodb+srv://niki:pass123@cluster0.xmtqe.mongodb.net/?retryWrites=true&w=majority";

const connectToMessageDb = async function () {
  await mongoose.connect(DbUrl).then(r => console.log("Messages DB connected"));
}

await connectToMessageDb();

export default class MessagesOps {

  addMessage = async function (data) {
    let body = {
      User: "empty for now",
      Content: data.content
    }
    await messages.create(body, (err) => {
      console.log(err);
    });
  }

  getMessages = async function () {
    return messages.find({}, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}


