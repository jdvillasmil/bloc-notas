
import React, { useState } from 'react';
import '../styles/Login.css'; //importando archivo de estilos

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
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;