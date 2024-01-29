require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./routes/productRoutes')
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api/products',router);
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

