// ARROW FUNCTION

//let nomeFuncao = (parametro1, parametro2) => {
  //  console.log(parametro1 + parametro2)
//}

//nomeFuncao('ola ', 'mundo')


//CALLBACK

// let pegaNome = (nome) => {
//     return nome
// }
// let saudar = (nome, callback) => {
//     const saudacao = 'Olá ' + callback(nome)
//     return saudacao
// } 

// const resultado = saudar('Otavio', pegaNome)

// console.log(resultado)


// METODOS DE ARRAY
let nomes = ['otavio', 'pedro', 'marcelo', 'alvaro']
let novoArray = nomes.map((nome)=> {
    return 'Olá ' + nome 
})

//console.log(novoArray)

//DATE
const dataAgora = new Date();

console.log(dataAgora.getDate())



















