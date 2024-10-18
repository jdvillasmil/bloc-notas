
import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  //Estados locales para el nombre de usuario, la contraseña y los errores
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (username === 'admin' && password === '1234') {
      onLogin(); // Llamamos la función onLogin si las credenciales son correctas
    } else {
      setError('Credenciales incorrectas'); 
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {/* Formulario de login */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Actualizamos el estado del nombre de usuario
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado de la contraseña
        />
        <button type="submit">Login</button>
        {/* Mostramos el error si las credenciales no son válidas */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
