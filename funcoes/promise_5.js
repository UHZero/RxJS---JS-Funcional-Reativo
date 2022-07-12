function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => (`Valor: ${v}`))
    .then(
        v => consol.log(v),
        // err => console.log(`Error Esp.: ${err}`)
    )
    .catch(err => console.log(`Error Geral: ${err}`))
    .then(() => console.log('Fim!'))