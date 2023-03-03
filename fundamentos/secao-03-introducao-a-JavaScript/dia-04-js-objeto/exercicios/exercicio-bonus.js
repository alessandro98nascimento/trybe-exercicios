let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function adicionaTurnoDaNoite(lesson, key, value){
    lesson[key] = value;
}
adicionaTurnoDaNoite(lesson2, "turno", "noite");
  


function listaTodasKeys(objeto){
    console.log(Object.keys(objeto));
}



function mostrTamanho(objeto){
    let tamanho = Object.keys(objeto).length;
    console.log(tamanho);
}



function listaTodasKeys(value){
    console.log(Object.values(value));
}

let todasLicoes = Object.assign({}, lesson1, lesson2, lesson3);

console.log(todasLicoes);

