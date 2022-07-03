import express from "express";
import UserOps from "../db/userOps.js";

const router = express.Router();
const userOps = new UserOps();

router.get('/', ((req, res) => {
  res.status(200).send('Hi from UserMain!!');
}));

router.post('/new', async (req, res) => {

  res.send(await userOps.addUser(req.body));
});

router.get('/users', async (req, res) => {
  res.send(await userOps.getUsers());
});

export const userRouter = router;
