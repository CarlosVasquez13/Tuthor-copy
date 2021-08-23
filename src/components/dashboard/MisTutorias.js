import React from 'react';
import Tarjeta from './Tarjeta';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const MisTutorias = ({listaHistorial, actualizarTab}) => {
  
  const setTabBuscar =() => {
    actualizarTab('Buscar')
  }

  
  return (

    <Grid container  spacing={3}>
      <h6></h6>
      <h1 className="header-1">Mis tutorias</h1>
      {/* Card mis tutorias */}
      <Grid item xs={12} md={12} lg={12}>
        
        <div className ="row">

          {listaHistorial.map( elemento => (
              
              <div className ="col-6">
              <Tarjeta
                key = { elemento.id}
                objTarjeta = {elemento}
                actualizarTab = {actualizarTab}
              />
              </div>
          ))}  
        </div>
      </Grid>



      <Grid item xs={12} md={12} lg={12}>
      <h1 className="header-1 mt-2">Buscar tutorias</h1>
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
                <button onClick = {setTabBuscar} type="button" class="btn btn-primary btn-lg btn-buscar mt-5 mx-5">Buscar Tutoria</button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>

    
  );
}
export default MisTutorias;
