let body = document.getElementById("body");
let h1 = document.createElement("h1");
h1.innerHTML = "TrybeTrip - Agência de Viagens";
body.appendChild(h1);

let main = document.createElement("main");
main.className = "main-content";
body.appendChild(main);

let section = document.createElement("section");
section.className = "center-content";
main.appendChild(section);

let p = document.createElement("p");
section.appendChild(p);

let section2 = document.createElement("section");
section2.className = "left-content";
main.appendChild(section2);

let section3 = document.createElement("section");
section3.className = "right-content";
main.appendChild(section3);

let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
section2.appendChild(img);

const stringNumber = () => {
    let array = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
    let ul = document.createElement("ul");
    section3.appendChild(ul);

    for(let index = 0; index < array.length; index += 1){
        let li = document.createElement("li");
        li.innerHTML = array[index];
        ul.appendChild(li);
    }
}


const adicionaH3 = () => {
    for(let index = 1; index <= 3; index += 1){
        let h3 = document.createElement ("h3");
        main.appendChild(h3);
    }
}

h1.className = "title";

const adcionaClasseH3 = () => {
    let h3Array = document.getElementsByTagName("h3");

    for(let index = 0; index < h3Array.length; index += 1){
        h3Array[index].className = "description";
    }
}

main.removeChild(section2);

section3.style.textAlign = "center";

section.parentElement.style.backgroundColor = "green";




stringNumber();
adicionaH3();
adcionaClasseH3();

let salvaSection3 = document.getElementsByClassName("right-content")[0];
let ul2 = salvaSection3.firstElementChild;
let li10 = ul2.lastChild;
ul2.removeChild(li10);
let li9 = ul2.lastChild;
ul2.removeChild(li9);
