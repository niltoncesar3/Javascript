// altera valores do array

//Dobre os numeros
const numeros = [10,20,30,40,50,60,70]

const numerosEmDobro = numeros.map(valor => valor * 343)

//console.log(numerosEmDobro)

//Para cada elemento: 
//Retorne apenas uma string com o nome da pessoas
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
  {nome:'Luiz', idade: 62},
  {nome:'Maria', idade: 23},
  {nome:'Eduardo', idade: 55},
  {nome:'Leticia', idade: 19},
  {nome:'Rosana', idade: 32},
  {nome:'Wallace', idade: 47}
]

const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => ({idade: obj.idade}))
//console.log(nomes)
console.log(idades)