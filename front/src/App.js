import React, {useState} from 'react';

export default function App() {
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  console.log(name);
  console.log(surname);

   function handleSubmit(){
    console.log(name)
    console.log(surname)
  }

  return (
    <div className="App">
      <h2>Registar</h2>
        <input type="text" placeholder="Nome" name="name" onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Sobrenome" name="surname" onChange={e => setSurname(e.target.value)}/>
        <input type="submit" value="Enviar" onClick={handleSubmit} />
    </div>
  );
}

