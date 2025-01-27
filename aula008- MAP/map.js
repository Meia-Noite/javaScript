/*
    DOMINANDO ARRAYS no javaScript

    Map(Mapear item do Array)
        - Criar um novo array com a mesma quantidade do array original.
        - O novo array você pode alterar em relação ao array original
        - Você tem acesso a 3 dados:
            - Item por item do array
            - Posição do array
            - array Completo  
*/
/*
const numeros = [1,2,3,4,5,6]
const dobro = numeros.map((numero, index, arrayCompleto) => {

    console.log(numero)
    console.log(index)
    console.log(arrayCompleto)
})

*/

const numeros = [1,2,3,8,10]

const dobro = numeros.map((numero) => {
    return numero * 4
})
console.log(dobro)