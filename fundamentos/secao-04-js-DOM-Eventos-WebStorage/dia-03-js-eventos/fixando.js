const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

firstLi.addEventListener("mouseover", ajeitaLi1)

function ajeitaLi1 () {
  firstLi.style.transform = "translateY(0)";
}

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

secondLi.addEventListener("click", adicionaClasse)
thirdLi.addEventListener("click", addClasse2)

function adicionaClasse () {
  secondLi.className = "tech";
}

function addClasse2 () {
  thirdLi.className = "tech";
}

//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.addEventListener("dblclick", unicaClasse)
secondLi.addEventListener("dblclick", unicaClasse)
thirdLi.addEventListener("dblclick", unicaClasse)

function unicaClasse (evento) {
  if (evento.target === firstLi){
    firstLi.className = "tech";
    secondLi.className = "";
    thirdLi.className = "";
  }
  if (evento.target === secondLi){
    firstLi.className = "";
    secondLi.className = "tech";
    thirdLi.className = "";
  }
  if (evento.target === thirdLi){
    firstLi.className = "";
    secondLi.className = "";
    thirdLi.className = "tech";
  }
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("change", (event) => {
  let capturaTextLi = document.querySelector(".tech");

  capturaTextLi.innerHTML = input.value;
})


// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

myWebpage.addEventListener("dblclick", (event) => {
   window.location.replace("https://github.com/alessandro98nascimento/Portifolio");
})


// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener("mouseover", (event) =>{
  myWebpage.style.color = "red";
})

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.