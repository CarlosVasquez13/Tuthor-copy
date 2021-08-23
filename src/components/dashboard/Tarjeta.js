import React, {useState} from 'react';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
const Tarjeta = ({objTarjeta, actualizarTab}) => {

    const colores = ['#ff00ff', '#008000', '#00ff00', '#ffff00', '#000080', '#0000ff', '#008080', '#00ffff', '#ffa500', '#8a2be2', '#a52a2a', '#5f9ea0', '#7fff00', '#ff1493']

    const obteneAleatorio = (max, min)=> {
        return Math.floor((Math.random() * (max - min) + min))

    }

    const obtenerColor = ()=> {
        let aleatorio = obteneAleatorio(colores.length, 0)
        console.log(aleatorio)
        return colores[aleatorio]
    }
    const estiloCard = {
        'backgroundColor': obtenerColor(),
        cursor: 'pointer'
    }

    const setTab = ()=> {
        actualizarTab('Sesion')
    }


    return (
        <div onClick={setTab}  className ="sm-col-12 md-col-6 lg-col-6 xl-col-6">
            <div className="card" style={estiloCard}>
                <div className="card-header">
                    <div className = "container">
                        <div className="row">
                            <div className="col-2">
                                <div className="contenedor-abr-clase">
                                    <h4 className="txt-abr-clase mt-4 mx-3">Fl3</h4>
                                </div>
                            </div>

                            <div className = "col-7">
                                <div className= "mt-4">
                                    <h5 className="nombre-clase">{objTarjeta.name}</h5>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className= "div-img-card-tutor">
                                            <img className="img-card-tutor" src="./img/student.png"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <span className="bold-span">Tutor:</span>
                                        <span >Juan Perez</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card-body contenido-tarjeta">
                    
                    <div className="descripcion-tutoria mx-5">
                        <div className="container">

                            <div className="row mx-2">
                                <div className="col-12 mt-3">
                                    <span className="bold-span">Hora inicio:</span>
                                    <span>{objTarjeta.horaInicio}</span>
                                </div>
                                <div className="col-12">
                                    <div></div>
                                    <span className="bold-span">Hora Final:</span>
                                    <span>{objTarjeta.horaFinal}</span>
                                </div>
                            </div>

                            <div className="row mx-2 mt-2">
                                <div className="col-2 mb-2">
                                    <ListAltOutlinedIcon/>
                                </div>
                                <div className="col-10 mb-2">
                                    <div className="row">
                                        <div className="col-12">
                                            <span className="bold-span">Proxima sesión:</span>
                                        </div>
                                        <div className="col-12">
                                            <span className="bold-span">{objTarjeta.siguienteSesion}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tarjeta;
