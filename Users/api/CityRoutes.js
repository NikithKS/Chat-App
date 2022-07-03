import express from "express";
import {CityOps} from "../db/cityOps.js";

const router = express.Router();
const cityOps = new CityOps();

router.get('/', async (req, res) => {
  res.send(await cityOps.getCities());
})

export const cityRouter = router;

