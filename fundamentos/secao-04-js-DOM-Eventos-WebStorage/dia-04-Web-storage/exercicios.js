const texto = document.querySelector(".description");

const corFundo = document.getElementById("background-color").children;

const corTexto = document.getElementById("font-color").children;

const tamanhoFonte = document.getElementById("font-size").children;

const espaçoLinhas = document.getElementById("line-height").children;

const estiloDeFonte = document.getElementById("font-family").children;



const mudaFundo = () => {
    for(let index = 1; index < corFundo.length; index += 1){
        let botao = corFundo[index];
        botao.addEventListener("click", (event) =>{
            if(botao.innerText === "white"){
                texto.style.backgroundColor = "white";
            }
            else if (botao.innerText === "black"){
                texto.style.backgroundColor = "black";
            }
            else if (botao.innerText === "green"){
                texto.style.backgroundColor = "green";
            }
            else if (botao.innerText === "blue"){
                texto.style.backgroundColor = "blue";
            }
            else if (botao.innerText === "yellow"){
                texto.style.backgroundColor = "yellow";
            }
        })
    }
}

const mudaCorTexto = () => {
    for(let index = 1; index < corTexto.length; index += 1){
        let botao = corTexto[index];
        botao.addEventListener("click", () => {
            if(botao.innerText === "black"){
                texto.style.color = "black";
            }
            if(botao.innerText === "red"){
                texto.style.color = "red";
            }
            if(botao.innerText === "white"){
                texto.style.color = "white";
            }
        })
    }
}

const mudaTamanhoFonte = () => {
    for(let index = 1; index < tamanhoFonte.length; index += 1){
        let botao = tamanhoFonte[index];
        botao.addEventListener("click", (event) => {
            if(botao.innerText === "8px"){
                texto.style.fontSize = "8px";
            }
            if(botao.innerText === "10px"){
                texto.style.fontSize = "10px";
            }
            if(botao.innerText === "12px"){
                texto.style.fontSize = "12px";
            }
            if(botao.innerText === "14px"){
                texto.style.fontSize = "14px";
            }
            if(botao.innerText === "20px"){
                texto.style.fontSize = "20px";
            }
        })
    }
}

const mudaEspaçoLinhas = () => {
    for(let index = 1; index < espaçoLinhas.length; index += 1){
        let botao = espaçoLinhas[index];
        botao.addEventListener("click", () => {
            if(botao.innerText === "1"){
                texto.style.lineHeight = "1";
            }
            if(botao.innerText === "normal"){
                texto.style.lineHeight = "normal";
            }
            if(botao.innerText === "1.5"){
                texto.style.lineHeight = "1.5";
            }
            if(botao.innerText === "2.0"){
                texto.style.lineHeight = "2.0";
            }
            if(botao.innerText === "3.0"){
                texto.style.lineHeight = "3.0";
            }
        })
    }
}

const mudaEstiloFonte = () => {
    for(let index = 1; index < estiloDeFonte.length; index += 1){
        let botao = estiloDeFonte[index];
        botao.addEventListener("click", () => {
            if(botao.innerText === "Arial"){
                texto.style.fontFamily = "Arial";
            }
            if(botao.innerText === "Times New Roman"){
                texto.style.fontFamily = "Times, New Roman"
            }
        })
    }
}



mudaFundo();
mudaCorTexto();
mudaTamanhoFonte();
mudaEspaçoLinhas();
mudaEstiloFonte();