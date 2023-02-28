//01
const a = 2;
const b = 15;

let soma = a + b;
console.log(soma);

let subtracao = a - b;
console.log(subtracao);

let divisao = a / b;
console.log(divisao);

let multiplicacao = a * b;
console.log(multiplicacao);

let resto = a % b;
console.log(resto);

//02
const num1 = 10;
const num2 = 6;

if(num1 > num2) {
    console.log("O maior número é " + num1);
} else if (num1 === num2){
    console.log("Os números são iguais!");
} else {
    console.log("O maior número é " + num2);
}

//03
const numUm = 16;
const numDois = 55;
const numTres = 35;

if (numUm === numDois && numUm === numTres){
    console.log("Todos os números são iguais");
}
else if (numUm > numDois && numUm > numTres){
    console.log("O maior número é " + numUm);
}
else if (numDois > numUm && numDois > numTres){
    console.log("O maior número é " + numDois);
} 
else if (numTres > numDois && numTres > numUm){
    console.log("O maior número é " + numTres);
}

//04
const negativoPositivo = -10;

if (negativoPositivo > 0){
    console.log("positive");
}
if (negativoPositivo < 0){
    console.log("negative");
}
if (negativoPositivo === 0){
    console.log("zero");
}

//05
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;
const somaAng = ang1 + ang2 + ang3; 

if (ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log("Erro");
}
else if(somaAng === 180){
    console.log(true);
}
else {
    console.log(false);
}

//06
let peça = "Cavalo";
let converter = peça.toLowerCase();

switch (converter) {
    case "torre":
        console.log("horizontal e vertical");
        break;

    case "cavalo":
        console.log("2 casas a frente e uma pro lado");
        break;

    case "bispo":
        console.log("diagonais");
        break;
    
    case "rei":
        console.log("uma casa em todas as direções");
        break;

    default:
        console.log("Erro");    
}

//07
const porcentagem = 80;

if (porcentagem < 0 || porcentagem > 100){
    console.log("Erro");
}
else if (porcentagem >= 90){
    console.log("A");
}
else if (porcentagem >= 80){
    console.log("B");
}
else if (porcentagem >= 70){
    console.log("C");
}
else if (porcentagem >= 60){
    console.log("D");
}
else if (porcentagem >= 50){
    console.log("E");
}
else if (porcentagem < 50){
    console.log("F");
}

//08

const parImpar1 = 22;
const parImpar2 = 12;
const parImpar3 = 23;

const valida1 = parImpar1 % 2;
const valida2 = parImpar2 % 2;
const valida3 = parImpar3 % 2;

if (valida1 !== 0 || valida2 !== 0 || valida3 !== 0){
    console.log(true);
}
else {
    console.log(false);
}

//09

const custo = 1000;
const valorVenda = 1900;
const imposto = 20 / 100;
const vendas = 1000;

const lucro = (valorVenda - custo) * imposto;

const totalVendasLucro = lucro * vendas;


if (custo < 0 || valorVenda < 0){
    console.log("Erro");
}


//10

const salarioBruto = 3000;
let inss = 0;

if (salarioBruto <= 1556.94){
    inss += salarioBruto * (8 / 100);
    console.log("o inss é " + inss);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss += salarioBruto * (9 / 100);
    console.log("o inss é " + inss);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss += salarioBruto * (11 / 100);
    console.log("o inss é " + inss);
}
else if (salarioBruto > 5189.82){
    inss += 570.88;
    console.log("o inss é " + inss);
}

let salarioBase = salarioBruto - inss;
console.log("o salario base é " + salarioBase);


let ir = 0;
if (salarioBase <= 1903.98){
    console.log("Isento do imposto de renda");
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    ir += salarioBase * (7.5 / 100) - 142.80;
    console.log("o imposto de renda é " + ir);
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    ir += salarioBase * (15 / 100) - 354.80;
    console.log("o imposto de renda é " + ir);
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir += salarioBase * (22.5 / 100) - 636.13;
    console.log("o imposto de renda é " + ir);
}
else if (salarioBase > 4664.68){
    ir += salarioBase * (27.5 / 100) - 869.36;
    console.log("o imposto de renda é " + ir);
}

const salarioLiquido = salarioBase - ir;
console.log("o salário líquido é " + salarioLiquido);








