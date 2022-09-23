const mysql=require("mysql")
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"kwcr3986",
    database:"vueStore"
})
module.exports=connection