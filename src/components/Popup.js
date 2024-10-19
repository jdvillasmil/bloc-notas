
import React, { useState } from 'react';
import '../styles/Popup.css';  // Importa el archivo CSS

const Popup = ({ note, onClose, onSave }) => {
  const [title, setTitle] = useState(note.title);  // Estado local para el título
  const [content, setContent] = useState(note.content);  // Estado local para el contenido

  const handleSave = () => {
    // Creamos una nueva nota con los cambios hechos
    const updatedNote = { ...note, title, content };
    onSave(updatedNote);  // Llamamos a la función onSave pasando la nota editada
    onClose();  // Cerramos el popup después de guardar
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Editar Nota</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}  // Permite editar el título
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}  // Permite editar el contenido
        />
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Popup;
