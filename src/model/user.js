const fs = require("fs");
const path = require("path");


const user = {
filename: path.join(__dirname, "../database/users.json"),


getAllUsers: () => {
        return JSON.parse(fs.readFileSync(user.filename, 'utf-8'));
    },

findByPk: (id) => {
    return user.getAllUsers().find((e) => e.id == id);
}, 

findByField: (field,text) =>{
    return user.getAllUsers().find((e) => e[field] == text);
}, 
}

module.exports = user;