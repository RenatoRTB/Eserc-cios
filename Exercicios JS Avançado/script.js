//ARRAY

//Nº 1

//let arr = [];

//Nº 2

//let arr = [10, 2, 3, 40, 5, 6, 7];

//Nº 3

//let comprimento = (arr.length);

//Nº 4

//let primeiro = (arr[0]);
//let meio = (arr[(arr.length - 1) / 2]);
//let ultimo = (arr[arr.length - 1])

//console.log(primeiro, meio, ultimo)

//Nº 5

//let mixedDataTypes = [5, 9, "abacaxi", true, "morango", 50, "banana"];
//console.log(mixedDataTypes.length);

//Nº 6

//let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//Nº 7

//console.log(itCompanies)

//Nº 8

//console.log(itCompanies.length)

//Nº 9

//console.log(itCompanies[0])
//console.log(itCompanies[(itCompanies.length -1) / 2])
//console.log(itCompanies[itCompanies.length -1])

//Nº 10

//for (i = 0; i < itCompanies.length; i++){
//   console.log(itCompanies[i]);
//}

//Nº 11

//SEM FILTER

//let arrNew = [];
    
//for (let item of itCompanies) {
  
//  let a = item.match(/o/g);
  
 // if (a!==null && a.length >=2) {

 // arrNew.push(item)
  
 // }
  
//}

//console.log(arrNew);

//COM FILTER

//let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


/*function retorno (value){   
   if ((a = value.match(/o/g)) && a.length == 2)
   return value;
}
let resultado = itCompanies.filter(retorno);
console.log(resultado);*/

//ANALISAR
//let resultado = itCompanies.filter((a) => a.match(/o/g) && a.length == 2);
//console.log(resultado);



//Nº 12

//itCompanies.splice(0, 3);

//Nº 13

//itCompanies.splice(-3);

//Nº 14

//itCompanies.splice(1, 5);

//Nº 15

//itCompanies.splice(0, 1);

//Nº 16

//Nº 17

//itCompanies.splice(-1, 1);

//Nº 18

//itCompanies.splice(0,7);

//Nº 19

//let lP = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

/*for (i=0; i < lP.length; i++){
   console.log(lP[i])
} */

/*OBJETO

//Nº 1

let cachorro = {};

//Nº 2

//console.log(cachorro);

//Nº 3

cachorro.nome = 'Shelby'
cachorro.pernas = '4 pernas'
cachorro.cor = 'branco'
cachorro.idade = '1 ano'
cachorro.latido = ""

//Nº 4

cachorro.latido = function() {
   return "uau uau"
}

//Nº 5

console.log(cachorro.nome);

console.log(cachorro.pernas);

console.log(cachorro.cor);

console.log(cachorro.idade);

console.log(cachorro.latido);

//Nº 6

cachorro.raca = 'Sshih tzu'
*/


//TRANSFORMAÇÃO DE ARRAY

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
{ product: 'banana', price: 3 },
{ product: 'mango', price: 6 },
{ product: 'potato', price: "" },
{ product: 'avocado', price: 8 },
{ product: 'coffee', price: 10 },
{ product: 'tea', price: "" },
]

//Nº 1
/* 
forEach
o map é um método de transformação de array que percorre cada 
elemento do array modificando-os de acordo com a função passada
como argumento;
o filter cria um novo array de acordo com a função de filtragem 
passada que retornará verdadeiro ou falso para seleção dos elementos
o reduce tb cria uma nova array reduzindo o tamanho da original de
acordo com a função usada, tem como parametros um acumulador e o
elemento atual da arra.
*/

//Nº 2

/*function func1(num) {
   console.log(num);
}
function soma(a, b, callback) {
var op = a + b;
callback(op);
}

soma(2, 3, func1);
*/

//Nº 3

//countries.forEach(number => console.log(number));

//Nº 4

//names.forEach(nomes => console.log(nomes));

//Nº 5

//numbers.forEach(num => console.log(num));

//Nº 6

//Nº 7

//Nº 8

//const arrNew = numbers.map(valor => valor ** 2);
//console.log(arrNew);

//Nº 9

//Nº 10

//const arrNew2 = products.map(products => (products.product) + " " + (products.price));
//console.log(arrNew2);

//Nº 11

//let land = countries.filter((countries) => countries.match(/land/g));
//console.log(land);   

//Nº 12

//Nº 13

//let seis = countries.filter(l => l.length >= 6);
//console.log(seis);   

//Nº 14

//let letraE = countries.filter(l => l.charAt(0) == "F");
//console.log(letraE);   

//Nº 15

//let val = products.filter(value => value.price.length != 0);
//console.log(val);

//Nº 16

//Nº 17

let soma = numbers.reduce((tot, curr) => tot + curr, 0);
console.log(soma);