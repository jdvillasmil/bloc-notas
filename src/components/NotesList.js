
import React, { useState } from 'react';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

const NotesList = ({ notes = [], onAddNote, onDeleteNote, onEditNote }) => {
  // Estado para manejar qué nota está seleccionada (para mostrarla en un popup)
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div>
      {/* Formulario para agregar una nueva nota */}
      <NoteForm onAddNote={onAddNote} />
      
      {/* Lista de notas */}
      <div>
        {notes.length > 0 ? (
          // Si hay notas, iteramos sobre ellas usando map
          notes.map((note) => (
            <NoteItem 
              key={note.id}
              note={note}
              onDelete={onDeleteNote}
              onEdit={onEditNote}
              onSelect={() => setSelectedNote(note)}
            />
          ))
        ) : (
          // Si no hay notas, mostramos un mensaje
          <p>No hay notas disponibles</p>
        )}
      </div>

      {/* Popup para ver la nota completa */}
      {selectedNote && <Popup note={selectedNote} onClose={() => setSelectedNote(null)} />}
    </div>
  );
};

export default NotesList;