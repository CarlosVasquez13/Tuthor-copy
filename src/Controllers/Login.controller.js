import axios from 'axios'
import jwt from 'jsonwebtoken'

class LoginController{
    Login = async (data) => {
        let Result;
        let dataUser = {
            email: data.email,
            password: data.password
        }
        let userType;
        
        console.info('data', data);
        
        await axios
        .post('https://api-tuthor.herokuapp.com/login', dataUser
        ).then( async (response) => {
            Result = {err: response.error, data: response.data};
            console.info("token: " , typeof(response.request.response))
            var token = JSON.parse(response.request.response)
            window.localStorage.setItem('token', token.token)
            //Decodifica el token, para validar si es tutor o estudiante : user.isTutor
            var user = await jwt.decode(token.token)
            console.info('user', user);
            userType = user.isTutor
            
        }).catch((err) => {
            console.info('err', err);
            
            Result = { err: true, message:  '¡Oops!, Ocurrió un problema al realizar la conexión.' }
        });
       
        return [Result, userType];
    }

    Test = async () => {
        await axios
        .get('https://api-tuthor.herokuapp.com/api/tests')
        .then((response) => {
            console.info('response', response);
            
        }).catch((err) => {
            console.info('err', err);
        });
    }
}


export default LoginController;