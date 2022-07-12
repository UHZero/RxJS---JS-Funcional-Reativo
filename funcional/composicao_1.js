function composicao (...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar (texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!`
}

function tornarLento(texto){
    return texto.split('').join(' ')
}
const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const menosExagerado = composicao(
    gritar,
    enfatizar
)

const resultado = exagerado('para aew')
const resultado1 = exagerado('mesma composicao para valores diferentes')
const resultado2 = menosExagerado('topzeira')

console.log(resultado)
console.log(resultado1)
console.log(resultado2)