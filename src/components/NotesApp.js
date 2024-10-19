import React, { useState } from "react";
import Grid from '@mui/material/Grid2';
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";
import Popup from "./Popup";

const NotesApp = () => {
  const [notes, setNotes] = useState([]); // Estado para las notas
  const [selectedNote, setSelectedNote] = useState(null); // Nota seleccionada para editar

  const handleSaveNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));  // Actualizamos la nota editada
    setSelectedNote(null); // Cerramos el popup después de guardar
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]); // Agregamos una nueva nota
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id)); // Eliminamos una nota
  };

  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid size={4} style={{ background: 'rgba(200, 0, 0, 0.3)', backdropFilter: 'blur(8px)', padding: 16 }}>
          <h1>Notes App</h1>
          <NoteForm onAddNote={handleAddNote} />
        </Grid>
        <Grid size={8}>
          <NotesList
            notes={notes}
            onSelect={setSelectedNote}
            onDeleteNote={handleDeleteNote}
          />
        </Grid>
      </Grid>

      {/* Renderizamos el popup si hay una nota seleccionada */}
      {selectedNote && (
        <Popup
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
          onSave={handleSaveNote} // Guardamos los cambios de la nota editada
        />
      )}
    </div>
  );
};

export default NotesApp;
