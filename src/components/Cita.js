import React from 'react';
import PropTypes from 'prop-types'; 

const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Tarea o Act: <span>{cita.tarea}</span></p>
        <p>Urgencia: <span>{cita.urgencia}</span></p>
        <p>Direccion: <span>{cita.direccion}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>

        <button 
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
        >
            Eliminar &times;
        </button>
    </div>
)
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;