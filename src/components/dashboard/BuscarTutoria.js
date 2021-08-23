import react, {Fragment} from 'react';
import Tarjeta from './Tarjeta';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import TarjetaDetalle from './TarjetaDetalle';
import shortid from 'shortid';



const BuscarTutoria = () => {


  const objTarjeta = {
    id: shortid.generate(),
    prefijo: 'POO',
    nombreClase: 'POO: Programación Orientada a objetos',
    tutor:{
      nombre: 'Juan Perez',
      imgTutor: './img/student.png'
    },
    horaInicio: '10:00am',
    horaFin: '11:00am',
    siguienteSesion: '6 de agosto del 2021',
    precio:250.0,
    valoracion:4.5
  }
  const objTarjeta2 = {
    id: shortid.generate(),
    prefijo: 'POO',
    nombreClase: 'POO: Programación Orientada a objetos',
    tutor:{
      nombre: 'Juan Perez',
      imgTutor: './img/student.png'
    },
    horaInicio: '10:00am',
    horaFin: '11:00am',
    siguienteSesion: '6 de agosto del 2021',
    precio:250.0,
    valoracion:4.5
  }

  const [busqueda, actualizarHistorial] = useState([objTarjeta, objTarjeta2]);
  const [encontrado, seleccionarEncontrado] = useState(-1)
  return (
    <Fragment>

      <div className="container tarjeta-buscar">
            <div className = "row pt-3 mx-3 ">
              <label className="label-1">Buscar nueva tutoria</label>
              <div className="col-12 mx-5">
                <form className="row">
                    <div className="col-3">
                          <label className ="label-4 mb-2 mx-2 mt-2">Nombre de la clase</label>
                          <input className="form-control" placeholder="Ej:. Base de datos" type="text"></input>
                    </div>
                    <div className="col-2">
                          <label className ="label-4 mb-2 mx-2 mt-2">Hora</label>
                          <select className= "form-control">
                            <option>07:00</option>
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                            <option>23:00</option>
                          </select>
                    </div>

                    <div className="col-3">
                          <label className ="label-4 mb-2 mx-2 mt-2">Nombre de la carrera</label>
                          <select value="" className="form-control">
                            <option>Ingeniería En Sistemas</option>
                            <option>Ingeniería Quimica</option>
                            <option>Ingeniería Electrica</option>
                            <option>Ingeniería Industrial</option>
                            <option>Ingeniería Civil</option>
                            <option>Ingeniería Mecanica</option>
                            <option>Física</option>
                            <option>Matematicas</option>
                          </select>
                    </div>

                    <div className="col-12 mt-2">
                      <button  type="submit" className="btn btn-primary">Buscar Tutoria</button>
                    </div>
                </form>

              </div>
              
            </div>

      </div>
      <div className="container pt-5">
        <div className="resultado-busqueda my-2 ">
            <div className ="row pt-3 mx-5">
              <h4 className="label-1">Resultados de tu busqueda</h4>
                  {busqueda.map( elemento => (
                 

                    <div className="col-11 mx-5">
                      <TarjetaDetalle
                        key = { elemento.id}
                        objTarjeta = {elemento}
                        seleccionarEncontrado = {seleccionarEncontrado}
                      />

                    </div>

       
                  ))}  

            </div>
        </div>
      </div>
    </Fragment>
   
  );
}

export default BuscarTutoria;