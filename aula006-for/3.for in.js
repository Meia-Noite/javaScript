/*
    Estrutura de repetição -LOOP
        - FOR IN
        - Usado para iterar Objetos
*/

const user = {
    name: 'Natália',
    age: 29,
    street: 'Rua: AL dos Girassóis'

}

for(let key in user){
    console.log(`${key} : ${user[key]}`)
}