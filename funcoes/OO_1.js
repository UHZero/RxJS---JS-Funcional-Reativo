function Produto (nome, preco, desconto = 0.15) {
    this._nome = nome
    this._preco = preco
    this._desconto = desconto

    this.precoFinal = function() {
        return this._preco * (1 - this._desconto)
    }
}

Produto.prototype.log = function() {
    console.log(`Produto: ${this._nome}, Preço: ${this._preco}`)
}

Object.defineProperty(Produto.prototype, 'nome', {
    get: function(){
        return this._nome
    }
})

Object.defineProperty(Produto.prototype, 'preco', {
    get: function(){
        return this._preco
    }
})

Object.defineProperty(Produto.prototype, 'desc', {
    get: function(){
        return this._desconto
    },
    set: function(novoDesconto){
        if(novoDesconto >=0 && novoDesconto <= 1) {
            this._desconto = novoDesconto
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desconto * 100}%`
    }
})

const p1 =  new Produto('Urso', 18.99)
p1.log()
console.log(p1.preco)

const p2 = new Produto('Notebook', 4299.90)
console.log(p2.preco)
p2.desc = 0.99
console.log(p2.desc, p2.descString)
console.log(p2.precoFinal())