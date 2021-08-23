import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import {RadioGroup, FormControlLabel, Radio
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Redirect, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

import SingController from '../Controllers/SignIn.controller'
import SignInController from "../Controllers/SignIn.controller";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const SignIn = ({ handleClose }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();
  const [value, setValue] = React.useState('0');
  const [formError, setError] = useState(false)
  const history = useHistory();

  const onSubmit = async (data) => {
    const SigninCtrl = new SignInController();
    Swal.fire({
      title: 'Espere un momento!',
      html: 'Estamos resgistrando tus datos.',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    const resultNewUser = await SigninCtrl.register(data, value)
    Swal.close();
    if (!resultNewUser.err) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: resultNewUser.message,
        showConfirmButton: true,
        timer: 1500
      }).then(() => {
        let path = '/Login';
        history.push(path);    
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: resultNewUser.message,
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
          <div className="container-form">
            <div className="container">
              <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <h4 className="txt-header-login">Crear cuenta</h4>
                
                <Controller
                  name="names"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Nombre Completo"
                      variant="standard"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "Nombre y apellido son requeridos" }}
                />

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
                  name="dni"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="DNI"
                      variant="standard"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      type="text"
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "El DNI es requerido." }}
                />
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Núemero de telefono"
                      variant="standard"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                  rules={{ required: "Número de telefono requerido." }}
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
                <RadioGroup aria-label="isTutor" name="isTutor" value={value} onChange={handleChange} style={{display: "block"}}>
                  <FormControlLabel value="1" control={<Radio />} label="Tutor" />
                  <FormControlLabel value="0" control={<Radio />} label="Estudiante" />
                </RadioGroup>
                <div>
                  <Button type="submit" variant="contained" color="primary">
                    Registrar
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
};

export default SignIn;
