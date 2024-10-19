// src/components/NoteItem.js
// Componente individual para mostrar cada nota
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteItem = ({ note, onDelete, onSelect }) => {
  return (
    <ListItem disableGutters
      secondaryAction={
        <IconButton onClick={() => onDelete(note.id)}>
          <DeleteIcon />
        </IconButton>
      }
      style={{ backgroundColor: "rgba(255,255,255,.2)" }}>
      <ListItemButton onClick={onSelect}>
        <ListItemText primary={note.title} secondary={note.content} />
      </ListItemButton>
    </ListItem>
  );
};

export default NoteItem;
