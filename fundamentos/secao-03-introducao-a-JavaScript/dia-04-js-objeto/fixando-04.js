let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
  };

  function exibeHabilidades(estudante){
    let habilidade = Object.keys(estudante);
    for(let index in habilidade){
        console.log(habilidade[index] + ", Nível: " + estudante[habilidade[index]]);
    }

  }
  
  exibeHabilidades(student1);

