const path = require('path');
const products = require("../database/products")

const categorias = (req, res) => {
    res.render("productsCategories",{"categorias":products});
    };

const detailProduct =  (req, res) => {
    res.render("index");
    };
 

module.exports = {
    categorias,
    detailProduct
}
