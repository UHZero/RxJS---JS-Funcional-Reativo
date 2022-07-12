const lista = [
    {nome: 'Tesoura', quantidade: 1, preco: 8.9},
    {nome: 'Caderno', quantidade: 1, preco: 4.9},
    {nome: 'Lapis', quantidade: 4, preco: 2.9},
    {nome: 'Caneta', quantidade: 3, preco: 5.7},
    {nome: 'impressora', quantidade: 0, preco: 555.8}
]

const getNome = item => item.nome
const qtdIgualZero = item => item.quantidade === 0
const listaReposicao = lista
    .filter(qtdIgualZero)
    .map(getNome)
console.log(listaReposicao)

Array.prototype.myFilter = function(fn) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

console.log(lista.myFilter(qtdIgualZero))