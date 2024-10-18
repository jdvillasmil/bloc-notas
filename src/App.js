import React, { useState } from 'react';
import Login from './components/Login';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([]);  // Inicializamos como un array vacío
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);  // Agregamos una nueva nota al array de notas
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));  // Eliminamos la nota por su ID
  };

  const handleEditNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
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
