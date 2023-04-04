const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

const expectedResult1 = 'Stephen King';

const authorBornIn1947 = () => {
  // escreva aqui o seu código
    const resultado = books.find((ano) => ano.author.birthYear === 1947);
    return resultado.author.name;
}

authorBornIn1947();

const expectedResult2 = 'Duna';

const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  const menorNome = books.forEach((name) => {
    if (name.name.length === 4) {
        nameBook = name.name;
    }});
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

smallerName();

const expectedResult3 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  const getNamedBook = () => {
    // escreva seu código aqui
    const resultado = books.find((nome) => nome.name.length === 26)
    return resultado;
  }

getNamedBook();


const expectedResult4 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  const autores1901 = books.every((ano) => ano.author.birthYear >= 1901);
  return autores1901;
}

everyoneWasBornOnSecXX();

const expectedResult5 = true;

const someBookWasReleaseOnThe80s = () => {
  // escreva seu código aqui
  const anos80 = books.some((ano) => ano.releaseYear >= 80);
  return anos80;
}

someBookWasReleaseOnThe80s();

const expectedResult6 = false;

const authorUnique = () => {
  // escreva seu código aqui
  let trueOrFalse = false;
  for(let index = 0; index < books.length; index += 1){
    let anoNascimento = books[index].author.birthYear;
    for(let index2 = 1; index < books.length; index += 1){
        let compara = books[index2].author.birthYear;
        if (anoNascimento === compara) {
            trueOrFalse = true;
        }
    }
  }
  return trueOrFalse;
}
authorUnique()