
import connectDB from "../config/connectDB";


let createNew = (item) =>{
    let sql = `INSERT INTO user( email, password, numberPhone, fullName) VALUES ('${item.email}', '${item.password}', '${item.numberPhone}', '${item.fullName}')` ; 
    let connection = connectDB.getConnection() ;

    connection.query(sql, (err, results)=> {
        if(err) return false;
        else return true;
    })
    return false;
}

let checkEmailExist = (email) => {
    let sql = `SELECT COUNT(id) as count FROM user WHERE email = '${email}'`; 
    let connection = connectDB.getConnection() ;

    return connection.promise().query(sql)
    .then( ([rows,fields]) => {
        return rows ; 
      })
      .catch(console.log) ; 
}

let findByEmail = (email) => {
    let sql = `SELECT * FROM user WHERE email = '${email}'`; 
    let connection = connectDB.getConnection() ;

    return connection.promise().query(sql)
    .then( ([rows,fields]) => {
        return rows ; 
      })
      .catch(console.log) ; 
}

export default {createNew, checkEmailExist, findByEmail} ; 

