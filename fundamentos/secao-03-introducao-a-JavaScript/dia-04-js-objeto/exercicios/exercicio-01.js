let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log("Bem vinda, " + info.personagem);

info.recorrente = "Sim";

//console.log(info);

for(let key in info){
    //console.log(key);
}


for(let key in info){
    //console.log(info[key]);
}

let clone = Object.assign({}, info);


clone.personagem = "Tio Patinhas";
clone.origem = "Christmas on Bear Mountain, Dells Four Color Comics #178"
clone.nota = "O último MacPatinhas";
clone.recorrente = "Sim";

for (let key in info) {
    if(key === "recorrente" && info[key] === "Sim" && clone[key] === "Sim"){
        //console.log("Ambos recorrentes!");
    }
    else {
        //console.log(info[key] + " e " + clone[key]);
    }

}



