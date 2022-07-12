const fs = require('fs') //file system -- biblioteca disponivel no node 
const path = require('path') //camihno do arquivo

const caminho = path.join(__dirname, 'dados.txt') // __dirname pega o caminho do arquivo atual
//console.log(__dirname)

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

console.log('inicio....')
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString())) //o _ é usado como uma convenção para ignorar um parametro(dizer que não vai ser usado)
console.log('fim....')

console.log('inicio sync....')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim sync....')