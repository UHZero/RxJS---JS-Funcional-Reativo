class Produto {
    constructor(nome, preco, desconto){
        this._nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    set nome (novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get nome () {
        return `Produto: ${this._nome}`
    }

    get precoFinal(){
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('Mouse', 329.90, 0.05)
p1.nome = 'mouse'
console.log(p1.nome)
console.log(p1.precoFinal)