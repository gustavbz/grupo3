const path = require('path');

const salud = (req, res) => {
    res.render("index");
    };

const cuidadoPersonal = (req, res) => {
    res.render("index");
    };


const limpieza = (req, res) => {
    res.render("index");
    };

    
const hogar = (req, res) => {
    res.render("index");
    };

module.exports = {
    salud,
    cuidadoPersonal,
    limpieza,
    hogar
}
