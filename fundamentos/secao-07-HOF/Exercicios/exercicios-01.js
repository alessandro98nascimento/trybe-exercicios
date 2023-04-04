const newEmployees = () => {
    const employees = {
      id1: nomeCompleto("Pedro", "Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: nomeCompleto("Luiza", "Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: nomeCompleto("Carla", "Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const nomeCompleto = (nome, sobrenome) => { 
  const converteNome = nome.toLowerCase();
  const converteSobrenome = sobrenome.toLowerCase();
  return {Nome: `${nome} ${sobrenome}`, Email: `${converteNome}${converteSobrenome}@gmail.com`}
};

console.log(newEmployees())