import React, {useState} from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const TarjetaDetalle = ({key, objTarjeta, seleccionarEncontrado}) => {

    const colores = ['#ff00ff', '#008000', '#00ff00', '#ffff00', '#000080', '#0000ff', '#008080', '#00ffff', '#ffa500', '#8a2be2', '#a52a2a', '#5f9ea0', '#7fff00', '#ff1493']

    const obteneAleatorio = (max, min)=> {
        return Math.floor((Math.random() * (max - min) + min))

    }

    const obtenerColor = ()=> {
        let aleatorio = obteneAleatorio(colores.length, 0)
       
        return colores[aleatorio]
    }
    const estiloCard = {
        'backgroundColor': obtenerColor(),
        cursor: 'pointer'
    }

    const encontrado =() => {
        seleccionarEncontrado(key)
    }


    return (
        <div  className ="sm-col-12 md-col-12 lg-col-12 xl-col-12 pb-5" onClick= {encontrado}>
            <div className="card" style={estiloCard}>
                <div className="card-header">
                    <div className = "container">
                        <div className="row">
                            <div className="col-2">
                                <div className="contenedor-abr-clase">
                                    <h4 className="txt-abr-clase mt-4 mx-3">{objTarjeta.prefijo}</h4>
                                </div>
                            </div>

                            <div className = "col-7">
                                <div className= "mt-4">
                                    <h5 className="nombre-clase">{objTarjeta.nombreClase}</h5>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className= "div-img-card-tutor">
                                            <img className="img-card-tutor" src={objTarjeta.tutor.imgTutor}/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <span className="bold-span">Tutor:</span>
                                        <span >{objTarjeta.tutor.nombre}</span>
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
    
                                <div className="col-12">
                                    <span className="bold-span">Precio</span>
                                    <span className="bold-span">{objTarjeta.precio}</span>
                                </div>
                                <div className="col-12">
                                    <span className="bold-span">Valoración: </span>
                                    <span className="bold-span">{objTarjeta.valoracion}</span>
                                </div>
                                <div className="col-12">
                                    <span className="bold-span">Método de pago: </span>
                                    <PayPalScriptProvider options={{ "client-id": "test" }}>
                                        <PayPalButtons />
                                    </PayPalScriptProvider>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TarjetaDetalle;
