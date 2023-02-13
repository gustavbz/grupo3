let express = require("express");
let routerProducts = express.Router();
const path = require("path");
const multer = require("multer");
const {getAllproducts,getCreateProduct,createProduct,detailProduct,productConfirm,productEdit,deleteProduct} = require("../controllers/productsControllers");

let storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, path.join(__dirname, "../../public/images/imgproducts"));
    },
    filename: (req,file, cb ) =>{
        console.log(file);
        const newImage = "producto" + Date.now() + path.extname(file.originalname);
        cb(null, newImage);
    }
})

const upload = multer({storage});

routerProducts.get("/products", getAllproducts); /* lista todos los productos */

routerProducts.get("/createproduct", getCreateProduct); /* muestra la vista del formulario ara crear un producto */
routerProducts.post("/createproduct/new", upload.single("imagen"), createProduct); /* la accion de enviar despues de haber creado un producto */

routerProducts.get( "/product/detail/:id", detailProduct); /* muestra el detail de un producto en particular */
routerProducts.get( "/products/edit/:id", productEdit); /* formulario de edicion */
routerProducts.put("/products/edit/:id", productConfirm); /*accion de editar producto, a donde vviaja */
routerProducts.delete("/products/edit/:id ", deleteProduct);     /* fomrulario de delete  */



module.exports = routerProducts;




/* 
/products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado */