//O método filter não modifica o array, apenas filtra

// Retorne números maiores do que 20


const numeros = [0,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90]
const numeros2 = numeros.filter(valor => valor >= 10)

console.log(numeros2)

//Retorne as pessoas que tem o nome com 7 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com 'a'

const pessoas = [
  {nome:'Nilton', idade: 62},
  {nome:'Cesar', idade: 23},
  {nome:'Sandra', idade: 55},
  {nome:'Samira', idade: 19},
  {nome:'Juliana', idade: 32},
]

//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7)
//const pessoasComMais50 = pessoas.filter(obj => obj.idade >= 50) 
//const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('n') )

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5 )
console.log(pessoasComNomeGrande)