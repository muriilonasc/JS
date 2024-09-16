/*
    Functions / Funções
        - Trecho de código que é executado
        SOMENTE quando solicitado (Parente gente boa)
        - Trecho de código que pode ser Reutilizado várias vezes


    [x] O que é uma função e como usar
    [x] Função VOID (vazia)
    [x] Função com parâmetros
    [x] Função Return
    [x] Arrow Function

*/
 
/* VOID */

function digaMeuNome(){
    const name = "Murilo"
    console.log(name)
}
// digaMeuNome()


/* PARÂMETROS */

function digaQualquerNome(nome){
    console.log(nome)
}
// digaQualquerNome("murilo nasc") 

function somarValores(numero1, numero2){
    const resultado = numero1 + numero2
    console.log(resultado)
}
// somarValores(8,8)


/* RETURN */

function calcValores(numero1, numero2){
    const resultado = numero1 + numero2
    return resultado
}

// const resultadoDaSoma = calcValores(30,40)
// console.log(resultadoDaSoma)

function estaEndividado(receita, gastos){
    if( receita > gastos){
        return "Está no AZUL"
    } else {
        return "Está no VERMELHO"
    }
}

const maria = estaEndividado(3000,4000)
const joao = estaEndividado(5000,1000)
// console.log(maria)
// console.log(joao)


/* ARROW FUNCTION (Função flecha)*/

// function abacate(){} Forma clássica

const digaUmNome = () => {   // Forma moderna
    console.log("Murilo")
}

digaUmNome()

