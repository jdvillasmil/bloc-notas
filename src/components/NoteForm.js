import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creamos una nueva nota con un id único
    const newNote = {
      id: Date.now(), // Usamos la fecha como un id único
      title,
      content,
    };
    onAddNote(newNote); // Llamamos a la función onAddNote con la nueva nota
    setTitle(""); // Limpiamos los campos del formulario
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <TextField required fullWidth label="Titulo" variant="outlined" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <TextField
        label="Contenido"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button fullWidth type="submit" variant="contained">Agregar Nota</Button>
    </form>
  );
};

export default NoteForm;
