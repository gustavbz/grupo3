let express = require("express");
let routerCategories = express.Router();
const {salud,cuidadoPersonal,hogar,limpieza} = require("../controllers/categoriescontrollers");


router.get("/salud/:id", salud);
router.get("/cuidadoPersonal/", cuidadoPersonal);
router.get("/hogar/:id", hogar);
router.get("/limpieza/:id", limpieza);


module.exports = routerCategories;