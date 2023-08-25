import  express  from "express";
import cors from "cors";


import initRoutes  from "./routes/web"; 
import connectDB from "./config/connectDB";
import * as dotenv from 'dotenv'; 


const app = express();

dotenv.config() ; 

console.log(connectDB.connectDB());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

app.listen(5000);

