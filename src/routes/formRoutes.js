let express = require("express");
let routerForm = express.Router();
const path = require("path");
const multer = require("multer");
const {body} = require("express-validator");
const {formLogin, login,register,formRegister} = require("../controllers/formControllers");
/* const router = require("./"); */

const validations = [
    body("nombre").isEmpty().withMessage("Poner nombre de usuario").bail(),
    body("apellido").isEmpty().withMessage("Poner apellido").bail(),
    body("email").isEmpty().withMessage("E-mail requerido").bail(),
    body("telefono").isEmpty().withMessage("Telefono requerido").bail(),
    body("direccion").isEmpty().withMessage("Direccion requerida")
    
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
routerForm.post("/register/newuser",validations, upload.single("avatar"), formRegister); 




module.exports = routerForm;

