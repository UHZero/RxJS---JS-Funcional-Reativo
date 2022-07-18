const _ = require('lodash')
const path = require('path')
const fn = require('./funcoes')
const { toArray, map, groupBy, mergeMap } = require('rxjs/operators')


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
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({chave: palavras[0], valor: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.valor))
    )
    .subscribe(console.log)