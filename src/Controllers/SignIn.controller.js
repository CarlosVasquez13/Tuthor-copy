import axios from 'axios'


class SignInController{
    register = async (data, isTutor) => {
        let Result;
        let dataUser = {
            names: data.names,
            phone: data.phone,
            email: data.email,
            password: data.password,
            isTutor: isTutor,
            dni: data.dni
        }
        
        await axios
        .post('https://api-tuthor.herokuapp.com/register', dataUser
        ).then((response) => {
            console.info('response', response);
            
            Result = {err: response.data.error, data: response.data.data, message: response.data.message};
            
        }).catch((err) => {
            Result = { err: true, message:  '¡Oops!, Ocurrió un problema al realizar la conexión.' }
        });
        return Result;
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


export default SignInController;