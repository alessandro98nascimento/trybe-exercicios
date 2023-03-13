const texto = document.querySelector(".description");
const corFundo = document.getElementById("background-color").children;
const corTexto = document.getElementById("font-color").children;
const tamanhoFonte = document.getElementById("font-size").children;

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


mudaFundo();
mudaCorTexto();
mudaTamanhoFonte();
