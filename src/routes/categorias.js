let express = require("express");
let routerCategories = express.Router();
const {categorias,detailProduct} = require("../controllers/categoriescontrollers");
/* const router = require("./"); */


routerCategories.get("/:home/:categoria", categorias);
routerCategories.get("/home/categoria/detail/:id", detailProduct);




module.exports = routerCategories;




