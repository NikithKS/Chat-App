import express from 'express';


const userApp = express()

userApp.use(express.json());


userApp.use('/', ((req, res, next) => {
  return res.status(500).json({'user': 'works'});
}));


userApp.listen(8084, () => {
  console.log("Listening 8084");
})

