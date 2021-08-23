import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import {RadioGroup, FormControlLabel, Radio
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Swal from 'sweetalert2'

import LoginController from '../Controllers/Login.controller'
import SignInController from "../Controllers/SignIn.controller";

import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "20%",

      
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "300px",
      },
      "& .MuiButtonBase-root": {
        margin: theme.spacing(2),
      },
    },
  }));

const Login = ({setUser}) => {
    const classes = useStyles();
    const { handleSubmit, control } = useForm();
    const [value, setValue] = React.useState('0');
    const [formError, setError] = useState(false);
    const [autentication, setAutentication] = useState(true);
    const history = useHistory();
    const routeChange = () => {
      let path = '/Dashboard';
      history.push(path);
    }

    const onSubmit = async (data) => {
      const LoginCtrl = new LoginController();
      Swal.fire({
        title: 'Espere un momento!',
        html: 'Estamos validando tus credenciales.',
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      const [LoginUser, typeUser] = await LoginCtrl.Login(data)
      console.log(typeUser)
      Swal.close();
      if (!LoginUser.err) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenido.',
          showConfirmButton: true,
          timer: 1500
        }).then(() => {
          let path = '/Dashboard';
          setUser(typeUser)
          history.push(path);    
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: LoginUser.message,
          showConfirmButton: true,
          timer: 1500
        })
      }
    };
  
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };


    return (
        <div className="base-form">
          <div className="row">
            <div className="col-4">
              <h5 className="header-login">Una oportunidad para todos</h5>
              <img class="img-login" src={"/img/img_0.png"}></img>
            </div>
            <div className="col-8">
            <div className= "container-form">
              <div className="container">

                <form className= {classes.root} onSubmit={handleSubmit(onSubmit)}>
                  <h4 className="txt-header-login">Inicio de sesión</h4>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        label="Correo Electronico"
                        variant="standard"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="email"
                      />
                    )}
                    rules={{ required: "Email requerido" }}
                  />

                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        label="Contraseña"
                        variant="standard"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="password"
                      />
                    )}
                    rules={{ required: "Contraseña required" }}
                  />

                  <div>
                    
                      <Button type="submit" variant="contained" color="primary">
                        Iniciar Sesión
                      </Button>
                  
                  </div>
                </form>

                {formError ?
                  (<div className="alert alert-danger" style={{width: "300px", marginLeft:"auto",marginRight: "auto"}} role="alert">Alerta de error</div>)
                : null}
                
              </div>

            </div>

          </div>
        </div>
      </div>
    );
}

export default Login;