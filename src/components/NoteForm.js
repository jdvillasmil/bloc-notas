import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creamos una nueva nota con un id único
    const newNote = {
      id: Date.now(), // Usamos la fecha como un id único
      title,
      content
    };
    onAddNote(newNote); // Llamamos a la función onAddNote con la nueva nota
    setTitle(''); // Limpiamos los campos del formulario
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default NoteForm;
