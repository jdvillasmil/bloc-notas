
import React, { useState } from 'react';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';
import Popup from './Popup';


const NotesList = ({ notes = [], onAddNote, onDeleteNote, onEditNote }) => {
  const [selectedNote, setSelectedNote] = useState(null);  // Nota seleccionada para editar

  const handleSaveNote = (updatedNote) => {
    onEditNote(updatedNote);  // Llamamos a la función para editar la nota
    setSelectedNote(null);  // Cerramos el popup después de guardar
  };

  return (
    <div>
      <NoteForm onAddNote={onAddNote} />
      <div>
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem 
              key={note.id}
              note={note}
              onDelete={onDeleteNote}
              onEdit={onEditNote}
              onSelect={() => setSelectedNote(note)}  // Seleccionamos la nota para editarla en el popup
            />
          ))
        ) : (
          <p>No hay notas disponibles</p>
        )}
      </div>

      {/* Renderizamos el popup si hay una nota seleccionada */}
      {selectedNote && (
        <Popup 
          note={selectedNote} 
          onClose={() => setSelectedNote(null)} 
          onSave={handleSaveNote}  // Guardamos los cambios de la nota editada
        />
      )}
    </div>
  );
};

export default NotesList;