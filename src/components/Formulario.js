import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types'; 

const Formulario = ({crearCita}) => {
    
    //Crear State de Citas
    const[cita, actualizarCita] = useState({
        tarea: '',
        urgencia: '',
        direccion:'',
        fecha: '',
        hora: ''
    });

    //funcion que se ejecutaanaod el usuario escribe en el input
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const [error, actualizarError] = useState(false)

    //Extraer los valores
    const { tarea,urgencia,direccion, fecha, hora} = cita;

    //Cuando usuario preciona agregar cita
    const submitCita = e => {
        e.preventDefault();

        //Validamos
        if(tarea.trim() === '' || urgencia.trim() === '' || direccion.trim() === '' ||
        fecha.trim() === '' || fecha.trim() === '' ){
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previo de error
        actualizarError(false);
        //Asignar ID
        cita.id = uuid();
        //Crear la cita 
        crearCita(cita);
        //Reiniciar el form
        actualizarCita({
            tarea: '',
            urgencia: '',
            direccion:'',
            fecha: '',
            hora: ''
        })
    }
    return (
        <Fragment>
            <h3>Crea una nueva cita</h3>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  : null}
            <form
                onSubmit={submitCita}
            >
                <label>Tarea o actividad:</label>
                <input
                    type="text"
                    name="tarea"
                    className="u-full-width"
                    placeholder="¿Que vas a hacer?"
                    onChange={actualizarState}
                    value={tarea}
                />
                <label>Urgencia:</label>
                <input
                    type="text"
                    name="urgencia"
                    className="u-full-width"
                    placeholder="Alta, Media, Baja"
                    onChange={actualizarState}
                    value={urgencia}
                />
                <label>Lugar:</label>
                <input
                    type="text"
                    name="direccion"
                    className="u-full-width"
                    placeholder="¿En donde?"
                    onChange={actualizarState}
                    value={direccion}
                />
                <label>Fecha:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <button
                    type="submit"
                    tex
                    className="u-full-width button-primary">
                        Agregar
                </button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;