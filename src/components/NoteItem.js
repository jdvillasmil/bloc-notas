// src/components/NoteItem.js
// Componente individual para mostrar cada nota
import React from 'react';

const NoteItem = ({ note, onDelete, onEdit, onSelect }) => {
  // Definimos los tamaños máximos para ancho y alto
  const MAX_WIDTH = 200;
  const MAX_HEIGHT = 100;

  return (
    <div 
      onClick={onSelect} // Seleccionamos la nota al hacer clic
      style={{
        maxWidth: `${MAX_WIDTH}px`, // Definimos el ancho máximo
        maxHeight: `${MAX_HEIGHT}px`, // Definimos el alto máximo
        overflow: 'hidden', // Recortamos el contenido si excede el tamaño
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
      }}
    >
      <h3>{note.title}</h3> {/* Título de la nota */}
      <p>{note.content}</p> {/* Contenido de la nota */}
      {/* Botones para editar o eliminar la nota */}
      <button onClick={() => onEdit(note)}>Editar</button>
      <button onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
  );
};

export default NoteItem;
