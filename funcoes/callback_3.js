const lista = [
    {nome: 'Tesoura', quantidade: 1, preco: 8.9},
    {nome: 'Caderno', quantidade: 1, preco: 4.9},
    {nome: 'Lapis', quantidade: 4, preco: 2.9},
    {nome: 'Caneta', quantidade: 3, preco: 5.7}
]

const getNome = item => item.nome
const nomeItens = lista.map(getNome)
console.log(nomeItens)

const getTotal = item => item.quantidade * item.preco
const totalItens = lista.map(getTotal)
console.log(totalItens)

Array.prototype.myMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        mapped.push(result)
    }
    return mapped
}

console.log(lista.myMap(getNome))