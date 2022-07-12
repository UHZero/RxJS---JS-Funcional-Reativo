const fs = require('fs')
const path = require('path')
const fn = require('./funcoes')


const caminhos = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '"', '?', '-', '_', ',', '<i>', '</i>', '[', ']', '(', ')', '\r', '♪', '!', '<', '>'
]

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.fnFiltro('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeNumero,
    fn.agruparPalavras,
    fn.palavraOrdenadaAttrNum('valor', 'desc')
)

palavrasMaisUsadas(caminhos)
    .then(console.log)

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