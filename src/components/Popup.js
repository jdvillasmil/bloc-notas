import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/Popup.css"; // Importa el archivo CSS

const Popup = ({ note, onClose, onSave }) => {
  const [title, setTitle] = useState(note.title); // Estado local para el título
  const [content, setContent] = useState(note.content); // Estado local para el contenido

  const handleSave = () => {
    // Creamos una nueva nota con los cambios hechos
    const updatedNote = { ...note, title, content };
    onSave(updatedNote); // Llamamos a la función onSave pasando la nota editada
    onClose(); // Cerramos el popup después de guardar
  };

  return (
    <Dialog onClose={onClose} open>
      <DialogTitle>Editar nota</DialogTitle>
      <DialogContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '16px 0', width: '100%' }}>
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
        </div>
        <DialogActions>
          <Button onClick={onClose}>Cerrar</Button>
          <Button onClick={handleSave}>Guardar</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
