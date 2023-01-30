const express =require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const publicPath = path.resolve(__dirname, "./public");
const rutas = require("./src/routes/main");
const categoriesProduct = require("./src/routes/categorias");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views")); //


app.use(rutas);
app.use(categoriesProduct); 

app.listen(3000, () =>{
    console.log("servidor corriendo")
});





/* app.get("/home", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
}); */

/* app.get("/register", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.get("/carrito", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
});

app.get("/detalle", (req,res) =>{
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});
 */
