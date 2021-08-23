import axios from "../services/CustomAxios";

class TutoriasController {
    registrarTutoria = async(data) => {
        let Result;
        console.info('data', data);
        
        let dataTutoria = {
            name: data.nombre,
            description: data.descripcion,
            tag: data.tag,
            tutor: "22",
            hours: 2,
            class_time: data.horaInicio + "-" +data.horaFin,
            zoom_class: data.linkZoom
        }
        console.info('dataTutoria', dataTutoria);
        await axios
        .post('/classrooms/create', dataTutoria)
        .then((response) => {
            console.info('response', response);
            Result = {err: false, data: response.data.data, message: response.data.message};
        }).catch((err) => {
            console.info('err', err);
            Result = { err: true, message:  '¡Oops!, Ocurrió un problema al realizar la conexión.' }
        })
        return Result;
    }

    MostrarTutorias = async ( tutorId = 0) => {
        let Result
        var uri = tutorId === 0 ? '/classrooms' : `/classrooms/${tutorId}`
        await axios.get(uri)
        .then((response) => {
            console.info('response', response.data);
            Result =  response.data;
        }).catch((err) => {
            Result =  err;
        })
        return Result;
    }
}

export default TutoriasController;