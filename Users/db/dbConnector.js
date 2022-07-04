import mongoose from "mongoose";
import envData from "../../envData.json";

const DbUrl = envData.DbUrl;
const connectToUserDb = async function () {
  if (mongoose.connection.readyState !== 1) {
    console.log('State: ' + mongoose.connection.readyState);
    await mongoose.connect(DbUrl).then(r => console.log("Users DB connected"));
  }
}

await connectToUserDb();
