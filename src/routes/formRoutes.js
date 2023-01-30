let express = require("express");
let routerForm = express.Router();
const {formLogin, login,register,formRegister} = require("../controllers/formControllers");
/* const router = require("./"); */

/* formularios de login- rutas*/
routerForm.get("/login", login);
routerForm.post("/login", formLogin);

/* formularios de registros-rutas */
routerForm.get("/register", register);
routerForm.post("/register/newuser", formRegister); 




module.exports = routerForm;

