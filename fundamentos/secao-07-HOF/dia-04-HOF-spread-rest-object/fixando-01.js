// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'maçã', 'ova'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite-moça', 'pera', 'granulado'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

