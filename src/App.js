
import React, { useState } from 'react';
import Login from './components/Login';
import NotesList from './components/NotesList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [notes, setNotes] = useState([]);  // Estado para las notas

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);  // Agregamos una nueva nota
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));  // Eliminamos una nota
  };

  const handleEditNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));  // Actualizamos la nota editada
  };

  return (
    <div>
      {loggedIn ? (
        <NotesList 
          notes={notes}
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
          onEditNote={handleEditNote}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
