function TipoSeguro (valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn){
            const novoValor = fn(this.valor)
            return TipoSeguro(novoValor)
        },
        flatMap(fn) {
            return this.map(fn).valor
        }
    }
}

const original = 'Esse é um texto'
const alterado = TipoSeguro(original)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .flatMap(t => t.split('').join(' '))
console.log(original, alterado)