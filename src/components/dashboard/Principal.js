import React from 'react';
import Tarjeta from './Tarjeta';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const Principal = ({listaHistorial, actualizarTab}) => {
  
  const setTabBuscar = ()=> {
    actualizarTab('Buscar')
  }
  return (

    
    <Grid container  spacing={3}>
      <h6></h6>
      <h1 className="header-1">Tutorias</h1>
      {/* Card buscar nueva tutoria */}
      <Grid item xs={12} md={12} lg={12}>
        <div className = "row tarjeta-buscar">
          <div className="col-12 contenido-tarjeta-buscar">
            <div className="row ">
              <div className= "col-8 mt-5">
                <div className="mx-5">
                  <h3>Buscar nuevas tutorias</h3>
                  <h6>En Tuthor puedes encontrar tutorias en distintas áreas.</h6>
                  <h6>Busca tutorias para seguir mejorando.</h6>
                </div>
              </div>
              <div className = "col-4 mt-5">
                <button onClick={setTabBuscar} type="button" className="btn btn-primary btn-lg btn-buscar mt-5 mx-5">Buscar Tutoria</button>
              </div>
            </div>
          </div>
        </div>
      <h1 className="header-1 mt-2">Visto recientemente</h1>
        </Grid>

      {listaHistorial.map( elemento => (
        
        <Grid item xs={12} md={6} lg={6}>
          <Tarjeta
            key = { elemento.id}
            objTarjeta = {elemento}
            actualizarTab = {actualizarTab}
          />
        </Grid>

      ))}  

    </Grid>
  );
}
export default Principal;



/*

*/