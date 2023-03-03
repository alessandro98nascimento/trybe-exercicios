let saldo = 1500;

function somaValorSaldo(soma){
    return saldo + soma;
}
function subtraiValorSaldo(valorSubtraido){
    return saldo - valorSubtraido;
    
}

function multipliqueValorSaldo(taxa){
    return saldo * taxa;
}

function divideValorSaldo(divisor){
    return saldo / divisor;
}

console.log(somaValorSaldo(1000));
console.log(subtraiValorSaldo(500));
console.log(multipliqueValorSaldo(1.5));
console.log(divideValorSaldo(3));