import express from 'express';
import {messageRouter} from "./api/messageRoutes.js";

const msgApp = express()

msgApp.use(express.json());



msgApp.listen(8088, () => {
  console.log("Message listening 8088.")
})


msgApp.use(messageRouter);
