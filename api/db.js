import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:"1234",
    database:"sayed",
   
})
export default  db