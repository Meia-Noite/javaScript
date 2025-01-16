/* 
    Variáveis
    const - constante não é possivel declar outro valor

    let - possivel declarar outros valores quantas vezes quiser

    var - Maneira antiga de se criar variável, nã recomendado usar mais

    Strings -> Textos

        const texto = "" ou crase para pular linha ``
    
    Numbers -> Números

        / = Divisão
        * = Multiplocação
        + = mais
        - = menos

    Boolean = Booleano

        true or false / verdadeiro ou falso

    Objects = Objetos -> guarda informaçoes sem precisar criar varias variaveis

    Null & Undefined -> Nulo(quando eu decido que nao tera valor nenhum) & Indefinido(quando eu cometo algum erro, solicito uma variavel que nao existe)

    Array -> Matriz = [] serve para agrupar muitas informações
*/
/*Array*/
const meuArray = [
  {
    Nome: "Duarte",
    Idade: 28,
    Casado: true,
  },
  {
    Nome: "Natália",
    Idade: 29,
    Casado: false,
  },
];
console.log(meuArray);
/*object*/
const usuario = {
  Nome: "Natália",
  Idade: 29,
  Casado: false,
};
console.log(usuario);

const numero = 200 + 250;

console.log(numero);

const abacate = "bom demais";

/*console.log(abacate)*/

const texto = `
hoje
amanhã
depois de amanhã
${abacate}
`;

console.log(texto);
