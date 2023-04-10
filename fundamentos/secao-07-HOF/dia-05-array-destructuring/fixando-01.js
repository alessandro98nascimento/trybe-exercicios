const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  return a + b;
}

//console.log(sum(primeNumbers[0], primeNumbers[2])) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [primeiro, segundo, terceiro] = primeNumbers;

//console.log(sum(primeiro, terceiro));

//next

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida,animal, bebida] = [bebida, comida, animal];
//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

//next

let numerosPares = [1, 3, 5, 6, 8, 10, 12];


console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

const [impar1, impar2, impar3, par1, par2, par3, par4] = numerosPares;

//
console.log(par1, par2, par3, par4);
