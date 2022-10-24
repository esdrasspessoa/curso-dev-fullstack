/*a estrutura do for é essa, primeiro vem a varivel que icia a conta, depois ate onde vai, e depois a regra que vai ser implementada para fazer o laço


for (let contador = 0; contador <=5000; contador++) {
    document.write('Hello World')
    document.write('<br>')
}*/

let opcoes

for (let contador = 2021; contador >= 1900; contador--) {
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes





let lista = ''

let clientes = ['Esdras', 'Tiago', 'Giselle', 'Bob']

for (let contador = 0; contador <= clientes.length -1; contador++) {
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaCliente').innerHTML = lista


/*VER VIDEO DE EXPLICAÇAO*/