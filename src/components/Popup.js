
import React from 'react';

const Popup = ({ note, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>{note.title}</h3> {/* Mostramos el título completo de la nota */}
        <p>{note.content}</p> {/* Mostramos el contenido completo de la nota */}
        <button onClick={onClose}>Cerrar</button> {/* Botón para cerrar el popup */}
      </div>
    </div>
  );
};

export default Popup;
