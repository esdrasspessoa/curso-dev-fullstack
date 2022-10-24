//TIPOS DE DADOS//


/*
string
number
baolean
array
object
undefined
null
*/

//string 
let nome = 'Esdras'
console.log(nome)

//string - concatenada  
let sobrenome = 'Santos'
/*console.log(nome + ' ' + sobrenome)
NÃO ESTÁ SENDO MUITO UTILIZADO
*/

/*string literal*/
console.log(`${nome} ${sobrenome}`)
//EMBORA SEJA UM POUCO COMPLICADO, É UM JEITO MAIS PROFISSIONAL


//NUMBER 
let idade = 22 
console.log(idade)
console.log(idade + 10)

/*numeros decimais - float*/
let porcentagem = 10.2
console.log(porcentagem)
/*se caso quisesse colocar o simbolo teria que concatenar*/
console.log(porcentagem + '%')


//boolean {true ou false}
/*os boleanos só são essas duas palavras reservadas*/
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)



//array
/*é como se fosse uma variavel, mas, nos permite guardar mais de um valor*/

let habilidades = ['HTML5', 'CSS3', 'SASS']
console.log(habilidades)

console.log(habilidades.length) /*me diz o tamnaho do array*/
console.log(habilidades[1])/*permite pegar um elemento dentro do array*/
/*LEMBRE DA DIFERENÇA DO LENGTH PARA [], QUANDO FOR PEGAR UM ITEM, LEMBRA QUE O ARRAY COMEÇA DO ZERO*/




//object
/*um objeto ele nos permite guardar um conjunto de informações*/

let pessoa = {
    nome: 'Esdras',
    sobrenome: 'Santos',
    idade: 22, 
    habilidades: ['musico', 'programador', 'estudante']
}

console.log(pessoa)
console.log(pessoa.sobrenome) //eu posso pegar só uma informação


// undefined 
/*é quando a varivel é declarada, mas não foi definida*/
let endereco
console.log(endereco)


//null 
/*sem valor, sem uso*/
let cidade = null
console.log(cidade)
