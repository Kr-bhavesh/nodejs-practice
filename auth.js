require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./routes/userroutes');
const protect = require('./routes/protectroutes')
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api',router);
app.use('/protect',protect);

const mongoose_url = process.env.MONGOOSE_URL;
const port = process.env.PORT;
mongoose
  .connect(
    mongoose_url
  ) //connect to mongodb with connection string
  .then(() => {
    console.log("mongodb connected sucessfully");
    app.listen(port, () => {
      console.log("app listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

