let express = require("express");
let routerCategories = express.Router();
const {categorias, detailProduct} = require("../controllers/categoriescontrollers");
/* const router = require("./"); */


routerCategories.get("/categorias", categorias);
routerCategories.get("/detalle/:id", detailProduct);



module.exports = routerCategories;




