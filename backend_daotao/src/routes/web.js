import express from "express"; 
import { user} from "../controllers/index" ; 
// import getFileImage from "../helpers/getFile";

let router = express.Router(); 

let initRouter = (app) => {
    router.get("/chao", function(req, res){
        res.send("xin chào mọi người");
    }); 

    router.get("/", function(req, res){
        res.send("trang chủ");
    }); 

    router.post("/sv/register", user.regissterUser) ; 
    router.post("/sv/login", user.loginSV) ; 

    
    return app.use("/", router);
}
export default initRouter; 
