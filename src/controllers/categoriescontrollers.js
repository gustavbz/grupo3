const path = require('path');
const products = require("../database/products.json")

const categorias = (req, res) => {
    let productCategorie = req.params.categoria;
    let filterProduct = products.filter(e => e.categoria == productCategorie);
    res.render("productsCategories",{"categorias":filterProduct});
    };

    const detailProduct = (req,res)=>{
        const id = req.params.id;
        const producto = products.find(e => e.id == parseInt(id))
        if(producto){ 
            res.render(path.join(__dirname, "../views/productDetail"),{producto})
       } else{
            res.send("not found")
        }
     }

module.exports = {
    categorias,
    detailProduct
}
