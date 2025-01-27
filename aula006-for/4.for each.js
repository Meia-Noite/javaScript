/*
    ForEach -> 
        item -> Dados/informações contidos na posição atual do Array.
        index -> Número da posição, sempre começando em 0.
        array -> Retorna o Array completo 
*/

const users = [
{name:'Rodolfo', age: 23, contact:'(18)99999-9999'},
{name:'Rodolfo', age: 23, contact:'(18)99999-9999'},
{name:'Ronaldo', age: 23, contact:'(18)99999-9999'},
{name:'Maria', age: 17, contact:'(18)99999-9999'},
];


users.forEach((item, index) => {
    if(item.age < 18){
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade`)
    }
});
/*
users.forEach(function(item, index){
    if(item.age < 18){
        console.log(`O cliente ${item.age}, posição ${index} é menor de idade`)
    }
})
*/