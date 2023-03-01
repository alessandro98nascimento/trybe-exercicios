//3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];
for(let index = 0; index < numbers.length; index += 1){
    if(index + 1 < numbers.length){
        let multiplicaPeloProximo = numbers[index] * numbers[index + 1];
        novoArray.push(multiplicaPeloProximo);
    }
    else{
        let ultimoNum = numbers[index] * 2;
        novoArray.push(ultimoNum);
    }
}
console.log(novoArray);