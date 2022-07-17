const fs = require('fs')
const path = require('path')
const fn = require('./funcoes')
const { toArray } = require('rxjs/operators')


const caminhos = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '"', '?', '-', '_', ',', '<i>', '</i>', '[', ']', '(', ')', '\r', '♪', '!'
]

fn.lerDiretorio(caminhos)
    .pipe(
        fn.fnFiltro('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeNumero(),
        toArray(),
        fn.agruparPalavras(),
        fn.palavraOrdenadaAttrNum('valor', 'desc')
    )
    .subscribe(console.log)