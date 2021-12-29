import React from 'react';

export default function App() {
  return (
    <div className="App">
      <h2>Registar</h2>
      <form action="/show" method="POST">
          <input type="text" placeholder="Nome" name="name" />
          <input type="text" placeholder="Sobrenome" name="surname" />
          <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

