let express = require("express");
let routerCategories = express.Router();
const {categorias, detailProduct} = require("../controllers/categoriescontrollers");
const router = require("./main");


router.get("/categorias/", categorias);
router.get("/detalle/:id", detailProduct);



module.exports = routerCategories;




