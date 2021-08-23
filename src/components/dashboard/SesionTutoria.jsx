import React, {useState} from "react";
import ReactPlayer from 'react-player'
const SesionTutoria = ({objTutoria, actualizarTab})=> {
    const [sesion, actualizarSesion] = useState(true);

    const handleClick = () => {
        actualizarTab('Mis tutorias')
    }
    return (
        <div className="container pt-5">
        <div className="resultado-busqueda my-2 ">
            <div className ="row pt-3 mx-5">
                <h4 className="label-1">{objTutoria.nombre}</h4>
                <div className="col-11 mx-5">
                    {sesion ?
                        <div className="reproductor">
                            <div className="alert alert-success" role="alert">
                                La sesión ya ha iniciado
                            </div>
                            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        </div>
                    :
                        <div className="alert alert-warning" role="alert">
                            <h5>La sesión todavia no inicia, espera a tutor</h5>
                        </div>
                    }  
                </div>
                <div className="col-12 mb-5 mt-2">
                    <button onClick= {handleClick} type="button" className="btn btn-danger">Salir</button>
                </div>
            </div>
        </div>
      </div> 
    );
}
export default SesionTutoria;