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
    const img = req.file.filename;

    let newImage;
    if(img.length > 0){
        newImage = `ìmages/imgusers/${img}`
    } 
    const obj = {
        ...data, 
        img : newImage
    }
 /*    let jsonString =  JSON.stringify(data); */
    users.push(obj);
    fs.writeFile(path.join(__dirname,'../database/users.json'), JSON.stringify(users), (err) => {
        if (err) {
            res.send("Error"); //writefilesync cambiar  users.push data. 
            return;
        }
        res.send("guardado");
       
    })
   /*  res.redirect("/home") */
}; 

module.exports = {
    login,
    formLogin,
    register,
    formRegister
}
