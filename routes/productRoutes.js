const express = require('express')
const router = express.Router()
const {insert_product,all_products,single_product,update_product,delete_product} = require('../controllers/productController')//import required controllers
router.post("/",insert_product);
router.get("/",all_products ); 
router.get("/:id",single_product);
router.put("/:id",update_product);
router.delete("/:id",delete_product);
  
module.exports = router;
