const lista = [
    {nome: 'Tesoura', quantidade: 1, preco: 8.9},
    {nome: 'Caderno', quantidade: 1, preco: 4.9},
    {nome: 'Lapis', quantidade: 4, preco: 2.9},
    {nome: 'Caneta', quantidade: 3, preco: 5.7},
    {nome: 'impressora', quantidade: 0, preco: 555.8}
]
const getTotal = item => item.quantidade * item.preco
const somar = (acc, el) => acc + el

const result = lista
    .map(getTotal)
    .reduce(somar)

console.log(result)

const lista2 = [
    {nome: 'Tesoura', quantidade: 1, preco: 8.9, fragil: true},
    {nome: 'Caderno', quantidade: 1, preco: 4.9, fragil: false},
    {nome: 'Lapis', quantidade: 4, preco: 2.9, fragil: false},
    {nome: 'Caneta', quantidade: 3, preco: 5.7, fragil: true},
    {nome: 'impressora', quantidade: 1, preco: 555.8, fragil: true}
]

// 1. fragil = true
// 2. qtde * preco = total
// 3. media totais

const media = lista2
    .filter(item => item.fragil)
    .map(item => item.quantidade * item.preco)
    .reduce((acc, el) => {
        const novaQntd = acc.qntd + 1
        const novoTotal = acc.total + el
        console.log(acc, el)
        return {
            qntd: novaQntd,
            total: novoTotal,
            media: novoTotal / novaQntd
        }
    }, { qntd: 0, total: 0, media: 0 })
    .media
console.log(media)
    

Array.prototype.myReduce = (fn, inicial) => {
    let acc = inicial
    for(let i = 0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const testes = lista
    .map(getTotal)
    .myReduce(somar)

console.log(testes)