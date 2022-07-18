const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function lerDiretorio(caminho){
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch(err) {
            subscriber.error(err)
        }
    })
}

function lerArquivo() {
    return createNewPipiableOperator(subscriber => ({
        next(caminho){
            try {
                const content = fs.readFileSync(caminho, { encoding: 'utf-8' })
                subscriber.next(content.toString())
            } catch(err) {
                subscriber.error(err)
            }
        }
    }))
}

function elementosTerminadosCom(padrao) {
    return createNewPipiableOperator(subscriber => ({
        next(texto){
            if(texto.endsWith(padrao)){
                subscriber.next(texto)
            }
        }
    }))
}

function removerElementosSeVazio () {
    return createNewPipiableOperator(subscriber => ({
        next(texto){
            if(texto.trim()){
                subscriber.next(texto)
            }
        }
    }))
}

function removerElementosSeNumero () {
    return createNewPipiableOperator(subscriber => ({
        next(texto) {
            const num = parseInt(texto.trim())
            if(num !== num) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerSimbolos(simbolos){
    return createNewPipiableOperator(subscriber => ({
        next(texto){
            const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, texto)
            subscriber.next(textoSemSimbolos)
        }
    }))
}

function separarTextoPor (simbolo) {
    return createNewPipiableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => subscriber.next(parte))
        }
    }))
}

function agruparPalavras () {
    return createNewPipiableOperator(subscriber => ({
        next(palavras) {
            const palavrasAgrupadas = Object.values(palavras.reduce((acc, palavra) => {
                const chave = palavra.toLowerCase()
                const valor = acc[chave] ? acc[chave].valor + 1 : 1
                acc[chave] = { chave, valor }
                return acc
            }, {}))
            subscriber.next(palavrasAgrupadas)
        }
    }))
}

function palavraOrdenadaAttrNum (attr, ordem = 'asc') {
    return createNewPipiableOperator(subscriber => ({
        next(array){
            const asc = (o1, o2) => o1[attr] - o2[attr]
            const desc = (o1, o2) => o2[attr] - o1[attr]
            subscriber.next([...array].sort(ordem === 'asc' ? asc : desc)) 
        }
    }))
}

function createNewPipiableOperator(OperatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = OperatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete()) 
            })
        })
    }
}

module.exports = {
    lerDiretorio,
    fnFiltro: elementosTerminadosCom,
    lerArquivo,
    removerElementosSeVazio,
    removerElementosSeNumero,
    removerSimbolos,
    separarTextoPor,
    agruparPalavras,
    palavraOrdenadaAttrNum
}