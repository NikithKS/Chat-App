import mongoose from "mongoose";

const DbUrl = "mongodb+srv://niki:pass123@cluster0.xmtqe.mongodb.net/?retryWrites=true&w=majority";

const connectToUserDb = async function () {
  if (mongoose.connection.readyState !== 1) {
    console.log('State: ' + mongoose.connection.readyState);
    await mongoose.connect(DbUrl).then(r => console.log("Users DB connected"));
  }
}

await connectToUserDb();
