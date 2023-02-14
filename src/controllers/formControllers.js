const path = require('path');
const fs = require("fs");
const { validationResult } = require('express-validator');
const dataUsers = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(dataUsers, 'utf-8'));
const user = require("../model/user");

//muestra la vista de login:
const login = (req, res) => {
        res.render("login");
    };
//procesa el metodo post y validaciones del login:
const formLogin  = (req, res) => {
  return res.send(req.body);
    };




 const register = (req, res) => {
    res.render("register");
    };

 const formRegister = (req, res) => {
    const errors = validationResult(req);  //codigo de validacion
    if (errors.isEmpty()) {
    const data =  req.body;
     
    const img = req.file.filename; 
        const newIdUser =  users[users.length - 1].id + 1;
        let newImage;
        if(img.length > 0){
            newImage = `ìmages/imgusers/${img}`
        } 
        const obj = {
            id: newIdUser,
            ...data, 
            img : newImage
        }
     /*    let jsonString =  JSON.stringify(data); */
        users.push(obj);
        fs.writeFile(path.join(__dirname,'../database/users.json'), JSON.stringify(users,null," "), (err) => {
            if (err) {
                res.send("Error"); //writefilesync cambiar  users.push data. 
                return;
            }
            res.render("login"); 
        })
        } else{
            res.render(path.join(__dirname, '../views/register'), {errors: errors.array()});// No hay errores, seguimos adelante
   /*  res.redirect("/home") */}
}; 

module.exports = {
    login,
    formLogin,
    register,
    formRegister,
   
}
