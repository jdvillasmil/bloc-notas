import React, { useState } from "react";
import Login from "./components/Login";
import NotesApp from "./components/NotesApp";
import "./styles/App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <NotesApp />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
