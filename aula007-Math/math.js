/*
    Math -> Matemática
        - pow(2,2) / potência / 2² = 4
        - sqrt(25,2) / raiz / √
        - ceil / teto -> arredondar para cima
        - Floor / Chão -> arredonda para baixo
        - random() / número aleatório entre 0 e 1 
        

*/

// POW
const calculo = Math.pow(2,5)
console.log(calculo)


// SQRT | RAIZ QUADRADA
/*
const calculo02 = Math.sqrt(125,2)
console.log(calculo02)
*/

// CEIL | arredonda para baixo

const cima = Math.sqrt(125,2)
console.log(Math.ceil(cima))

// FLOOR | Arredonda para baixo
const baixo = Math.sqrt(125,2)
console.log(Math.floor(baixo))


const randola = Math.random() * (100 - 1) + 1;
console.log(Math.ceil(randola))