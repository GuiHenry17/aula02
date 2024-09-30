import { useEffect, useState } from "react";

export default function App() {

  const [listaFotos, setFotos] = useState([]);

  useEffect(() => {
    const buscarUsuario = async () => {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
      const dados = await resposta.json();
      setFotos(dados);
    }
    buscarUsuario();
  }, [])

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {listaFotos.map(el => (
          <li key={el.id}>
            <h2>{el.title}</h2>
            <img src={el.url} alt={el.title} width={300}/>
          </li>
        ))}
      </ul>
    </>
  );
}
