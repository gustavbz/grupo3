const path = require('path');
const fs = require("fs");
/* const { reset } = require('nodemon'); */
const allProducts = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(allProducts, 'utf-8'));
/*  console.log(products);  */
const getAllproducts = (req,res) => {
    res.render("allProducts", {"products": products});
}

const getCreateProduct = (req,res) => {
    res.render("createProduct");
    
}

 const createProduct = (req,res) => {
    const dataProduct =  req.body;
    const img = req.file.filename;
    const newIdProduct = products[products.length - 1].id + 1;

    let newImage;
    if(img.length > 0){
        newImage = `ìmages/imgproducts/${img}`
    } 
    const obj = {
        id: newIdProduct,
        ...dataProduct, 
        img : newImage
    }
    products.push(obj);
    fs.writeFile(path.join(__dirname,'../database/products.json'), JSON.stringify(products), (err) => {
        if (err) {
            res.send("Error"); //writefilesync cambiar  users.push data. 
            return;
        }
        res.send("guardado");
    })

   /*  res.redirect("/home") */
}; 

const detailProduct = (req,res)=>{
    const id = req.params.id;
    const product = products.find(e => e.id == parseInt(id))
    if(product){ 
        res.render(path.join(__dirname, "../views/productDetailAdmin"),{product})
   } else{
        res.send("not found")
    }
     
};
   const productEdit = (req,res) =>{
    const {id} = req.params;
    const productEdit = products.find(elem => elem.id == id);
    res.render(path.join(__dirname, "../views/productEdit"),{productEdit});
   }

   const productConfirm = (req, res) => {
    const id = req.params.id;
    for(let i = 0; i < products.length; i++) {
         if(products[i].id == id){
            products[i].nombre =  req.body.nombre
            products[i].categoria = req.body.categoria
            products[i].precio = req.body.precio
            products[i].descripcion =  req.body.descripcion
         }
    } 
        fs.writeFile(path.join(__dirname,'../database/products.json'), JSON.stringify(products, null, " "), (err) => {
        if (err) {
            res.send("Error"); 
            return;
        }
        res.render(path.join(__dirname, "../views/index")) ;
    })
    
    }

    const deleteProduct = (req,res) => {
        const  id = req.params.id;
         const finalProducts = products.filter(product => product.id !== id);
         console.log(finalProducts);
    /*      fs.writeFileSync(path.join(__dirname,'../database/products.json'), JSON.stringify(finalProducts, null, " "), (err) => {
             if (err) {
                 res.send("Error"); 
                 return;
             }
             res.render(path.join(__dirname, "../views/productEdit"),{finalUsers});
         }); */
     }
     
    


module.exports = {
    getAllproducts,
    getCreateProduct,
    createProduct,
    detailProduct,
    productConfirm,
    productEdit,
    deleteProduct
}