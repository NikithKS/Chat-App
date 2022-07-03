import express from "express";
import MessagesOps from "../db/messagesOps.js";

const router = express.Router();
const messageOps = new MessagesOps();

router.route('/')
    .get(async (req, res) => {
      res.send(await messageOps.getMessages());
    })
    .post(async (req, res) => {
      res.status(200).send(await messageOps.addMessage(req));
    });

router.delete('/:messageId', (req, res) => {
  res.status(200).send('Deleted');
});

router.put('/edit/:messageId', (req, res) => {
  res.status(200).send('Edited');
});


export const messageRouter = router;
