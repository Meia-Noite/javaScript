/*  VOID    */
function digaMeuNome(){
    console.log("Natália Duarte")
}
digaMeuNome()

/*  Parâmetros    */

function digaSeuNome(nome){
    console.log(nome)
}
digaSeuNome('Vilma')
digaSeuNome('Luis')
digaSeuNome('Darline')
digaSeuNome('Mateus')

/*  -   -   -   -   -   -   */

function soma(numero1, numero2){
    const resultadoo = numero1 + numero2

    console.log(resultadoo)
}

soma(3,6)
soma(30,20)

/*  Return  */

function soma(numero01, numero02){
    const resultado = numero01 + numero02

    return resultado
}

const resultadoDaSoma = soma(33, 55)

console.log(resultadoDaSoma)

/*  -   -   -   -   -   -   -   */

function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return 'Está no AZUL'
    } else {
        return 'Está no VERMELHO'
    }
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000, 2000)

console.log(maria)
console.log(joao)

/*  Arrow Function (Função Flecha) */

function abacate(){} //Forma clássica
const digaUmNome = () => {
    console.log('Jurema')
}
digaUmNome()