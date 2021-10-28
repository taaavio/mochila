//OBJETOS
const pessoa = {
    nome: "Otavio",
    sobrenome: "augusto",
    idade: 20,
    status: "Solteiro",
    CPF: "477.071.598.61",
    hetero: false,
    Falar: function() {
        return "estou conversando"
    } 
}

//JSON

const informacoesEmJson = '{ "nome":"Otavio", "idade": 26 }'

const jsonConvertido = JSON.parse(informacoesEmJson)

console.log(jsonConvertido)

//MÈTODOS DE STRING (TEXTO)
const meuNome = 'Otavio augusto'
//console.log( meuNome.indexOF('O'))
//console.log(meuNome[7])

//LOOPS OU REPETIÇOES
console.log(1)
console.log(2)
console.log(3)
//...

//LOOP QUE IRA IMPRIMIR DO 1 AO 10
for (i = 0; i <= 10; i ++) {
    // AQUI IRA A REPETIÇÂO
    console.log('repetiu')
}

// IF TERNARIO

if (1 == 1){
    console.log('certo')
} else {console.log('errado')}


1==1 


//FUNCTION CONVENCIONAL 

function nome (){
    console.log('entrou na funçao')
}
//ARROW FUNCTION
const nomeDaFuncao = (valor1,valor2) => {
    const soma = valor1 + valor2
    console.log(soma)
} 
nomeDaFuncao(10,10)


