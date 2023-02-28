//01
let numbers = [6, 8, 4, 20, 70, 8, 100, 2, 36, 28];

for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//02
let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log(soma);

//03

let mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica);

//04

if(mediaAritmetica > 20){
    console.log("Valor maior que 20");
}
else {
    console.log("Valor menor ou igual a 20");
}

//05

let maiorNum = 0;
for(let index = 0; index < numbers.length; index += 1){
    if(maiorNum < numbers[index]){
        maiorNum = numbers[index];
    }
}
console.log(maiorNum);

//06

let quantidadeNumImpar = 0;
for(let index = 0; index < numbers.length; index += 1){
    let revelaImpar = numbers[index] % 2;
    if(revelaImpar !== 0){
        quantidadeNumImpar += 1;
    }

}
if(quantidadeNumImpar === 0){
    console.log("Nenhum valor ímpar encontrado");
}
else {
    console.log(quantidadeNumImpar);
}


//07

let menorNum = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if(menorNum > numbers[index]){
        menorNum = numbers[index];
    }
}
console.log(menorNum);

//08

let array1 = [];
for(let index = 1; index <= 25; index += 1){
    array1.push(index);
}
console.log(array1);

//09

for(let index = 0; index < array.length; index += 1){
    let dobra = array[index] / 2;
    console.log(dobra);
}

//10

let fatorial = 10;
for(let index = 1; index < 10; index += 1){
    fatorial *= (10 - index);
}
console.log(fatorial);

//11

let palavra = "tryber";
let palavraInvertida = "";

for(let index = 0; index < palavra.length; index += 1){
    palavraInvertida += palavra[palavra.length - 1 - index];
}
console.log(palavraInvertida);

//12

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
for(let index = 1; index < array.length; index += 1){
    let guardaPalavra = array[index];
    if(maiorPalavra.length < guardaPalavra.length){
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);


let menorPalavra = array[0];
for(let index = 1; index < array.length; index += 1){
    let guardaPalavra = array[index];
    if(menorPalavra.length > guardaPalavra.length){
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);