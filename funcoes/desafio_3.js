const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
console.log(caminho)
function showContent (file) {
    return new Promise(resolve => {
        fs.readFile(file, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

showContent(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linha => linha.join(','))
    .then(console.log)
