const numeroAleatorio = (min, max) => { 
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min 
};

const resultado = numeroAleatorio(1, 5);

const confereNum = (num) => { 
  return (resultado === num)? "Parabéns, você ganhou" : "Tente novamente" 
};

console.log(confereNum(2));