import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";

const gateWayApp = express();

gateWayApp.use(express.json());
gateWayApp.use(cors());

gateWayApp.use('/user', proxy("http://localhost:8084/"));
gateWayApp.use('/message', proxy("http://localhost:8088/"));

gateWayApp.get('/', (req, res) => {
  res.send('Hi from Gateway!');
})

gateWayApp.listen(8080, () => {
  console.log("Proxy listener started");
})
