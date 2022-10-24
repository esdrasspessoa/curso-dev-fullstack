/*o prompt não é muito usado pq ele tem alguns bugs, como agora, se eu quiser fazer uma soma, o prompt não identifica o valor da entrada como number*/

let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt ('Digite a Segunda nota')

/*para transformar a entrada como number, temos que transformar a variavel usando o parseInt*/
let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)
  
let mediaMinima = 7

let media = (nota1 + nota2) / 2


if (media >= mediaMinima) {
    document.write('Ok, você passou de ano!')
} else if (media < mediaMinima) {
    document.write('REPROVADO :(')
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('Nossa!!! Você é muito INTELIGENTE')
} else if (media >= mediaMinima && media === 9) {
    document.write('Você mandou bem! Vamos tentar chegar no 10')
} else if (media < mediaMinima || media === 5) {
    document.write('Você precisa melhorar e muitooo!!!')
} 