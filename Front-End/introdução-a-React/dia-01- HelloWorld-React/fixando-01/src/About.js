import React from "react";

export class Info extends React.Component {
    render() {
    const lista = ['Dom', 'Js', 'CSS', 'Fetch', 'API', 'Local Storage'];
      return  (
      <>
        <h1>Alessandro Santos do Nascimento</h1>
        <p>Olá, meu nome é Alessandro Santos do Nascimento e sou estudante de front-end na instituição de ensino trybe</p>
        <h2>Minhas Habilidades</h2>
        <ul>
          {
              lista.map((skill) => <li>{skill}</li>)
          }
        </ul>
      </>)
    }
}

export default Info;