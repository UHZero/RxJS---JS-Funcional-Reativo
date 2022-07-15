const fs = require('fs')
const path = require('path')
const fn = require('./funcoes')


const caminhos = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '"', '?', '-', '_', ',', '<i>', '</i>', '[', ']', '(', ')', '\r', '♪', '!'
]

fn.lerDiretorio(caminhos)
    .subscribe(console.log)


    // .then(fn.fnFiltro('.srt'))
    // .then(fn.lerArquivos)
    // .then(fn.mesclarElementos)
    // .then(fn.separarTextoPor('\n'))
    // .then(fn.removerElementosSeVazio)
    // .then(fn.removerElementosSeIncluir('-->'))
    // .then(fn.removerElementosSeNumero)
    // .then(fn.removerSimbolos(simbolos))
    // .then(fn.mesclarElementos)
    // .then(fn.separarTextoPor(' '))
    // .then(fn.removerElementosSeVazio)
    // .then(fn.removerElementosSeNumero)
    // .then(fn.agruparPalavras)
    // .then(fn.palavraOrdenadaAttrNum('valor', 'desc'))
    // .then(console.log)
// let arquivos = fs.readdirSync(caminhos)
//     .map(regex)
//     .filter(e => e !== null)


// function showContent(file) {
//     for(i in file){
//         let f = path.join(__dirname, file[i].toString())
//     console.log(f)
//     }
// }

// showContent(arquivos)
//     // .then(console.log)