const corFundo = document.getElementById("background-color").children;
const texto = document.querySelector(".description");


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

mudaFundo();