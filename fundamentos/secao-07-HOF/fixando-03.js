const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const verifica = arr.some((name1) => name === name1);
  return verifica;
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    //Adicione seu código aqui
const verifyAges = (pessoa, age) => {
  const nomes = pessoa.every((todas) => todas.age >= age);
  return nomes;
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));