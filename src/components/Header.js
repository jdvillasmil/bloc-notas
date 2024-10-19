// src/components/Header.js
import React from 'react';
import '../styles/Header.css';  // Ruta corregida para apuntar a la carpeta styles

const Header = () => {
  return (
    <header className="app-header">
      <h1 className="animated-message">Bienvenidos a mi app de bloc de notas</h1>
    </header>
  );
};

export default Header;

