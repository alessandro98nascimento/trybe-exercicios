let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaClientes(cliente){
    if(typeof cliente === "string"){
        clientesTrybeBank.push(cliente);
        return clientesTrybeBank;
    }
    else{
        return "ERRO";
    }
}

console.log(adicionaClientes("Alessandro"));

function excluiCliente(clienteExcluido){
    if(clientesTrybeBank.includes(clienteExcluido) && typeof clienteExcluido === "string"){
        let indexCliente = clientesTrybeBank.indexOf(clienteExcluido);
        clientesTrybeBank.splice(indexCliente);
        return clientesTrybeBank;
    }
    else{
        return "ERRO";
    }
}
console.log(excluiCliente("Alessandro"));
    



