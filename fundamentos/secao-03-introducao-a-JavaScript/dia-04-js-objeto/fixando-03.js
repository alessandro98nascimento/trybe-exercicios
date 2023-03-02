let student = {};




function adicionaInfo(object, key, values){
    object[key] = values;
}

adicionaInfo(student, "nome", "Alessandro");
adicionaInfo(student, "e-mail", "alessandro-s-nascimento@hotmail.com");
adicionaInfo(student, "telefone", "(13)997047426");
adicionaInfo(student, "gitHub", "https://github.com/alessandro98nascimento");

console.log(student);