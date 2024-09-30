import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState();

  useEffect(() => { 
    const  receberUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
    }
    receberUsuario()
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        <img src={usuario?.picture.medium}/>
        <p>{usuario?.name.title} {usuario?.name.first} {usuario?.name.last}</p>
        <p>{usuario?.gender}</p>
        <p>{usuario?.dob.age}</p>
        <p>{usuario?.login.username}</p>
        <p>{usuario?.email}</p>
        <p>{usuario?.cell}</p>
      </ul>
    </>
  );
}
