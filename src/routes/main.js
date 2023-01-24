let express = require("express");
let router = express.Router();
const {index,login,productCart,register} = require("../controllers/mainControllers");


router.get("/home", index);
router.get("/login", login);
router.get("/carrito", productCart);
router.get("/register", register);
/* router.get("/", controller.index); */



module.exports = router;