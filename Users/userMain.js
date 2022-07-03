import express from 'express';
import {userRouter} from "./api/UserRoutes.js";

const userApp = express()

userApp.use(express.json());

userApp.use(userRouter);

userApp.listen(8084, () => {
  console.log("Listening 8084");
})

