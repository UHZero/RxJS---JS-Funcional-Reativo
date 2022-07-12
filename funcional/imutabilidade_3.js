const pessoa = Object.freeze({
    nome: 'Xico',
    altura: 1.89,
    cidade: 'Florianopolis',
    logradouro: Object.freeze({
        rua: 'ETC e TAL',
        cep: 9998882321
    })
})

function novaPessoa(pessoa) {
    const newPessoa = { ...pessoa }
    newPessoa.nome = 'Flirby'
    newPessoa.cidade = 'Guarulhos'
    newPessoa.logradouro.rua = 'Nova Rua'
    return newPessoa
}

const outraPessoa = novaPessoa(pessoa)

console.log(pessoa, outraPessoa)



