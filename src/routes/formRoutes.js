let express = require("express");
let routerForm = express.Router();
const path = require("path");
const multer = require("multer");
const {body} = require("express-validator");
const {formLogin, login,register,formRegister} = require("../controllers/formControllers");
/* const router = require("./"); */

const validations = [
    body("nombre").notEmpty().withMessage("Poner nombre de usuario"),
    body("apellido").notEmpty().withMessage("Poner apellido"),
    body("email").notEmpty().withMessage("E-mail requerido"),
    body("telefono").notEmpty().withMessage("Telefono requerido"),
    body("direccion").notEmpty().withMessage("Direccion requerida"),  
]

let storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, path.join(__dirname, "../../public/images/imgusers"));
    },
    filename: (req,file, cb ) =>{
        console.log(file);
        const newImage = "avatar" + Date.now() + path.extname(file.originalname);
        cb(null, newImage);
    }
})

const upload = multer({storage});


/* formularios de login- rutas*/
routerForm.get("/login", login);
routerForm.post("/login", formLogin);

/* formularios de registros-rutas */
routerForm.get("/register", register);
routerForm.post("/register/newuser",upload.single("avatar"),validations, formRegister); 




module.exports = routerForm;

