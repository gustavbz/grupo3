const path = require('path');


const index = (req, res) => {
    res.render("index");
    };
/* const login = (req, res) => {
    res.render("login");
    }; */
const productCart = (req, res) => {
    res.render("productCart");
 };
    
/* res.sendFile(path.join(__dirname, '../views', 'login.html')); */

 module.exports = {
    index,
    productCart,

 };


