import { AuthResponse } from "../model/AuthResponse";

class AppHelper{
    static getLoggedInUser(){
         const authObjet = localStorage.getItem('user');
         if(authObjet){
            const {email} = JSON.parse(authObjet) as AuthResponse;
            return email;
         }
         return "Unknow@gmail.com";
    }
}
export default AppHelper;