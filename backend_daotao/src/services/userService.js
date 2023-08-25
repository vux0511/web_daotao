// import { transValidation, transSuccess } from "../../lang/vi";
// import {app} from "../config/app" ;
// import  sendMail from "../config/mailer"

import bcrypt from "bcrypt"; 
// import fs from "fs-extra" ; 

import {user} from "../models/index" ; 

let createNew =  (item ) => {
    return new Promise(async (resolve, reject) => {
        try{
            
            let check = await user.checkEmailExist(item.email);
            if(check[0].count > 0){
                return resolve(false) ; 
            }
            let saltRounds = 7 ; 
            const salt = bcrypt.genSaltSync(saltRounds);

            let data = {
                numberPhone:    item.numberPhone, 
                email:          item.email,
                fullName:       item.fullName,
                password:bcrypt.hashSync(item.password + "",salt),
            }

            let result = await user.createNew(data); 
            console.log(result) ; 
            resolve(true); 
        }catch(err){
            reject(err); 
        }
    
    })
}

let loginSV = (item) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("hello login"); 
            let userItems = await user.findByEmail( item.email); 
            let userItem = userItems[0]; 
            console.log(userItem); 
            if(userItem){
                let checkPass = bcrypt.compareSync(item.password+"", userItem.password + "");
                console.log("checkpass") ; 
                console.log(checkPass);
                if(checkPass){
                    let userInfor = {
                        idUser : userItem.id,
                        fullName: userItem.fullName,
                        email: userItem.email,
                        role: userItem.role,
                        numberPhone: userItem.numberPhone,
                        status: userItem.status,
                        createAt: userItem.createAt,
                        
                    }
                    
                    return resolve(userInfor);
                }else{
                    return resolve(false);
                }
            }else{
                resolve(false);
            }
        } catch (error) {
            reject(false); 

        }
    })
}; 


export default {createNew, loginSV} ; 
