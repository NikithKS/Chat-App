import express from 'express';

const msgApp = express()

msgApp.use(express.json());



msgApp.listen(8088, () => {
  console.log("Message listening 8088.")
})


msgApp.use('/', ((req, res, next) => {
  return res.status(200).json({'messsage': 'works'});
}))
