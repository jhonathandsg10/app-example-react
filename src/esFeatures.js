/** ATRIBUIÇÃO VIA DESESTRUTURAÇÃO */

let pessoa = {
    nome: "Jhonathan",
    email: "jhonathan.douglas@gmail.com"
}

/* 
let nome= pessoa.nome
let email = pessoa.email 
*/

let {nome, email} = pessoa
console.log(nome,email)

let nomes = ['caio','jhonathan','Augusto']

let [pessoa1, pessoa2] = nomes