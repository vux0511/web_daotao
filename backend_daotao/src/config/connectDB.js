import mysql from "mysql2";
import bluebird from "bluebird" ;

let connection = null ; 

let connectDB = () => {
    connection = mysql.createConnection({
        host:       process.env.DB_host,
        user:       process.env.DB_USERNAME,
        password:   process.env.DB_PASSWORD,
        database:   process.env.DB_NAME,
    });
    connection.connect((err) => {
        if(err){
            console.log(err);
        }else{
            console.log("connected DB") ; 
        }
    });
}

let getConnection = () => {
    return connection ; 
}

export default {connectDB, getConnection} ; 

