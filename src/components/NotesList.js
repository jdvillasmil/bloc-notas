import React, { useState } from "react";
import NoteItem from "./NoteItem";
import List from "@mui/material/List";
import InboxIcon from '@mui/icons-material/Inbox';

const NotesList = ({ notes = [], onSelect, onDeleteNote }) => {

  if (!notes.length) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
        <h2 style={{ fontSize: 24, textAlign: 'center', margin: 0 }}>Empty list</h2>
        <h3 style={{ fontSize: 16, textAlign: 'center', margin: 0 }}>Add a note using the form</h3>
        <InboxIcon style={{ fontSize: 64 }} />
      </div>
    )
  }

  return (
    <List sx={{ pt: 0 }}>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDeleteNote}
          onSelect={() => onSelect(note)} // Seleccionamos la nota para editarla en el popup
        />
      ))}
    </List>
  );
};

export default NotesList;
