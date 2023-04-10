const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

let divisiveis = numbers.find((num) => num % 5 === 0 && num % 3 === 0);

console.log(divisiveis);


const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const nome = names.find((names) => (names.length === 5));

console.log(nome);


const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui

const musica = musicas.find((muicaI, index) => muicaI.id === '31031685');

console.log(musica)