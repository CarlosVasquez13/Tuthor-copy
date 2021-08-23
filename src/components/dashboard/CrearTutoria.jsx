import React, {useState} from 'react';
import shortid from 'shortid';
import Swal from 'sweetalert2'
import tutoriasController from '../../Controllers/Tutorias.controller'

const CrearTutoria = ({actualizarTab})=> {
    const [error, actualizarError] = useState(false);
    const [mensajeError, actualizarMensajeError] = useState('');
    const idTutor = 1;
    const [tutoria, actualizarTutoria] = useState({
        nombre: '',
        descripcion: '',
        tag: '',
        tutor: idTutor,
        horaInicio: '',
        horaFin: '',
        linkZoom: ''
    })
    const {nombre, descripcion, tag, tutor,horaInicio, horaFin, linkZoom} = tutoria;


    const actualizarState = (e)=> {
        actualizarTutoria({
            ...tutoria,
            [e.target.name]: e.target.value
        })
       
    }


    const submitTutoria = async (e)=>{
        e.preventDefault();
        var tutoriaCtrl = new tutoriasController();
        if(nombre.trim() === '' || descripcion.trim() === '' || tag.trim() === '' || horaInicio.trim() === '' || linkZoom.trim() === ''){
            actualizarError(true)
            actualizarMensajeError("Todos los campos son obligatorio");
            return;
        }
        const [hora1, minuto1] = horaInicio.split(':');
        const [hora2, minuto2] = horaFin.split(':');
        if(parseInt(hora1) > parseInt(hora2)){
            actualizarError(true);
            actualizarMensajeError('La hora de inicio y la hora final son incorrectas');
            return;
        }

        actualizarError(false);
        actualizarMensajeError('');
        tutoria.id = shortid.generate();
        console.info("tutoria> ", tutoria)
        var resultCreateTutoria = await tutoriaCtrl.registrarTutoria(tutoria);
        console.info(resultCreateTutoria)
        if (!resultCreateTutoria.err) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Tutoria creada",
                showConfirmButton: true,
                timer: 1500
              })
        }
        //Crear la tutoria


        // Limpiar form

        actualizarTutoria({
            nombre: '',
            descripcion: '',
            tag: '',
            tutor: idTutor,
            horaInicio: '',
            horaFin: '',
            linkZoom: ''
        });

        actualizarTab('Mis tutorias');
    }

    return(
        
        <div className="container tarjeta-nuevo">
            <div className = "row pt-3 mx-3 pb-5">
              <label className="label-1">Crear nueva Tutoria</label>
              {error ? <p className="alert alert-danger">{mensajeError}</p> : null}
              <div className="col-9 mx-5">
                <form onSubmit={submitTutoria}>
                    <div className="form-group">
                        <label className="label-4 mb-2 mt-2" for="txt-nombre-clase">Nombre de la clase</label>
                        <input name="nombre" onChange= { actualizarState} type="text" className="form-control" id="txt-nombre-clase" placeholder="ejemplo:. Programación Orientada a Objetos"></input>
                    </div>
                    <div className="form-group">
                        <label className="label-4 mb-2 mt-2" for="txt-tag">Tag</label>
                        <input name="tag" onChange={actualizarState} type="text" className="form-control"  id="txt-tag" placeholder="Ejemplo:. POO"></input>
                    </div>
                    <div className="form-group">
                        <label className="label-4 mb-2 mt-2" for="txt-tag">Descripción</label>
                        <textarea name="descripcion" onChange={actualizarState} type="textarea" rows='3' className="form-control"  id="txt-tag" placeholder="Ejemplo:. Esta clase ..."></textarea>
                    </div>
                    <div className="form-group">
                        <label className="label-4 mb-2 mt-2" for="hora-inicio">Hora inicio</label>
                        <input
                            type="time"
                            name="horaInicio"
                            className="form-control"
                            onChange= {actualizarState}
                            value = {horaInicio}
                            />
                    </div>
                    <div className="form-group">
                        <label className="label-4 mb-2 mt-2" for="hora-fin">Hora final</label>
                        <input
                            type="time"
                            name="horaFin"
                            className="form-control"
                            onChange= {actualizarState}
                            value = {horaFin}
                            />
                    </div>
                    <div className="form-group">
                        <label className="label-4 mb-2 mt-2" for="txt-zoom">Link ZOOM</label>
                        <input name="linkZoom" onChange={actualizarState} type="text" className="form-control"  id="txt-zoom" placeholder="Link recurrente de zoom"></input>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg mt-3"
                        
                    >Agregar nueva clase</button>
                   
                </form>
              </div>
            </div>
        </div>

    );
}

export default CrearTutoria;