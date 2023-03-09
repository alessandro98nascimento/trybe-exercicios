let ondeVcEsta = document.getElementById("elementoOndeVoceEsta");
ondeVcEsta.parentElement.style.color = "red";

let filho2x = document.getElementById("primeiroFilhoDoFilho");
filho2x.innerText = "Filho do Filho";

let pai = document.getElementById("pai");
console.log(ondeVcEsta.parentElement.innerText);

let filho3 = document.getElementById("elementoOndeVoceEsta");
console.log(filho3.parentElement.childNodes[5]);