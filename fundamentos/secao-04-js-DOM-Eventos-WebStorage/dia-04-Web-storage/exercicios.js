const texto = document.querySelector(".description");
const textoBackgoundCollor = texto.style.backgroundColor = localStorage.getItem("backgroundCollor");
const textoColor = texto.style.color = localStorage.getItem("color")
const textoFontSize = texto.style.fontSize = localStorage.getItem("fontSize");
const textolineHeight = texto.style.lineHeight = localStorage.getItem("lineHeight");
const textofontFamily = texto.style.fontFamily = localStorage.getItem("fontFamily");


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
                localStorage.setItem("backgroundCollor", "white");
                texto.style.backgroundColor = localStorage.getItem("backgroundCollor");
                
            }
            else if (botao.innerText === "black"){
                localStorage.setItem("backgroundCollor", "black");
                texto.style.backgroundColor = texto.style.backgroundColor = localStorage.getItem("backgroundCollor");
                
            }
            else if (botao.innerText === "green"){
                localStorage.setItem("backgroundCollor", "green");
                texto.style.backgroundColor = localStorage.getItem("backgroundCollor");
            }
            else if (botao.innerText === "blue"){
                localStorage.setItem("backgroundCollor", "blue");
                texto.style.backgroundColor = localStorage.getItem("backgroundCollor");
            }
            else if (botao.innerText === "yellow"){
                localStorage.setItem("backgroundCollor", "yellow")
                texto.style.backgroundColor = localStorage.getItem("backgroundCollor");
            }
        })
    }
}

const mudaCorTexto = () => {
    for(let index = 1; index < corTexto.length; index += 1){
        let botao = corTexto[index];
        botao.addEventListener("click", () => {
            if(botao.innerText === "black"){
                localStorage.setItem("color", "black")
                texto.style.color = localStorage.getItem("color");
            }
            if(botao.innerText === "red"){
                localStorage.setItem("color", "red");
                texto.style.color = localStorage.getItem("color");
            }
            if(botao.innerText === "white"){
                localStorage.setItem("color", "white");
                texto.style.color = localStorage.getItem("color");
            }
        })
    }
}

const mudaTamanhoFonte = () => {
    for(let index = 1; index < tamanhoFonte.length; index += 1){
        let botao = tamanhoFonte[index];
        botao.addEventListener("click", (event) => {
            if(botao.innerText === "8px"){
                localStorage.setItem("fontSize", "8px");
                texto.style.fontSize = localStorage.getItem("fontSize");
            }
            if(botao.innerText === "10px"){
                localStorage.setItem("fontSize", "10px");
                texto.style.fontSize = localStorage.getItem("fontSize");
            }
            if(botao.innerText === "12px"){
                localStorage.setItem("fontSize", "12px");
                texto.style.fontSize = localStorage.getItem("fontSize");
            }
            if(botao.innerText === "14px"){
                localStorage.setItem("fontSize", "14px");
                texto.style.fontSize = localStorage.getItem("fontSize");
            }
            if(botao.innerText === "20px"){
                localStorage.setItem("fontSize", "20px");
                texto.style.fontSize = localStorage.getItem("fontSize");
            }
        })
    }
}

const mudaEspaçoLinhas = () => {
    for(let index = 1; index < espaçoLinhas.length; index += 1){
        let botao = espaçoLinhas[index];
        botao.addEventListener("click", () => {
            if(botao.innerText === "1"){
                localStorage.setItem("lineHeight", "1");
                texto.style.lineHeight = "1";
            }
            if(botao.innerText === "normal"){
                localStorage.setItem("lineHeight", "normal");
                texto.style.lineHeight = localStorage.getItem("lineHeight");
            }
            if(botao.innerText === "1.5"){
                localStorage.setItem("lineHeight", "1.5");
                texto.style.lineHeight = localStorage.getItem("lineHeight");
            }
            if(botao.innerText === "2.0"){
                localStorage.setItem("lineHeight", "2.0");
                texto.style.lineHeight = localStorage.getItem("lineHeight");
            }
            if(botao.innerText === "3.0"){
                localStorage.setItem("lineHeight", "3.0");
                texto.style.lineHeight = localStorage.getItem("lineHeight");
            }
        })
    }
}

const mudaEstiloFonte = () => {
    for(let index = 1; index < estiloDeFonte.length; index += 1){
        let botao = estiloDeFonte[index];
        botao.addEventListener("click", () => {
            if(botao.innerText === "Arial"){
                localStorage.setItem("fontFamily", "Arial");
                texto.style.fontFamily = localStorage.getItem("fontFamily");
            }
            if(botao.innerText === "Times New Roman"){
                localStorage.setItem("fontFamily", "Times, New Roman");
                texto.style.fontFamily = localStorage.getItem("fontFamily");
            }
        })
    }
}



mudaFundo();
mudaCorTexto();
mudaTamanhoFonte();
mudaEspaçoLinhas();
mudaEstiloFonte();