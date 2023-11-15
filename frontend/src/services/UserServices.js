export default class UserService {
    static baseUrl = 'http://127.0.0.1:8000/';
     static UserLogin = UserService.baseUrl+'api/login'
    static UserRegister = UserService.baseUrl+'api/register'


    // static getUserLogin() {
    //     return `${UserService.baseUrl}api/login`;
    // }
    // static getUserRegister() {
    //     return `${UserService.baseUrl}api/register`;
    // }
   
}