const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')
// const regex = e => e.match(/\S+legendas_(\d){2}.srt/g)

function composicao (...fns) {
    return function(valor) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc){
                return fn(await acc)
            }else {
                return fn(acc)
            }
        }, valor)
    }
}

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

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(content.toString())
        } catch(err) {
            reject(err)
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(padrao) {
    return function(array) {
        return array.filter(el => el.endsWith(padrao))
    }
}

function removerElementosSeVazio (array) {
    return array.filter(el => el.trim())
}

function removerElementosSeIncluir (padrao) {
    return function (array) {
        return array.filter(el => !el.includes(padrao))
    }
}

// o JS retorna false se comparar NaN com outro NaN (57. Remover Linhas com Numeros JS - Funcional)
function removerElementosSeNumero (array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos) {
    return function (array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, el)
        })
    }
}

function mesclarElementos (array) {
    return array.join(' ')
}

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}

function agruparPalavras (array) {
    return Object.values(array.reduce((acc, el) => {
        const chave = el.toLowerCase()
        const valor = acc[chave] ? acc[chave].valor + 1 : 1
        acc[chave] = { chave, valor }
        return acc
    }, {}))
}

function palavraOrdenadaAttrNum (attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(ordem === 'asc' ? asc : desc)
    }
}


// function removerNumeros (array) {
//     return array.filter(el => {
//         if(!el.match(/\d+\b\r$/g)) {
//             return el
//         }
//     })
// }


module.exports = {
    composicao,
    lerDiretorio,
    fnFiltro: elementosTerminadosCom,
    lerArquivos,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparPalavras,
    palavraOrdenadaAttrNum
}