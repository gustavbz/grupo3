const path = require('path');
const fs = require("fs");
const dataUsers = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(dataUsers, 'utf-8'));


const login = (req, res) => {
        res.render("login");
        };

const formLogin  = (req, res) => {
    res.send(req.body);
    };

 const register = (req, res) => {
    res.render("register");
    };

 const formRegister = (req, res) => {
    const data =  req.body;
    let jsonString = JSON.stringify(data);
    fs.appendFile(path.join(__dirname, '../database/users.json'), jsonString, (err) => {
        if (err) {
            res.send("Error");
            return;
        }
        res.send("guardado");
    });
   /*  res.redirect("/home") */
}; 

module.exports = {
    login,
    formLogin,
    register,
    formRegister
}
