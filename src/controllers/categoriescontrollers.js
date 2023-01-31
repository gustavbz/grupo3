const path = require('path');
const products = require("../database/products.json")

const categorias = (req, res) => {
    let productCategorie = req.params.categoria;
    let filterProduct = products.filter(e => e.categoria == productCategorie);
    res.render("productsCategories",{"categorias":filterProduct});
    };

const detailProduct =  (req, res) => {
    res.render("index");
    };
 

module.exports = {
    categorias,
    detailProduct
}
