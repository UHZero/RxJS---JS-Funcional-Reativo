function esperarPor(tempo = 3000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor()
//     .then(() => console.log('executando uma promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('executando uma promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('executando uma promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(2000)
    console.log(`Async/Await ${valor}`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3
}

executar()
    .then(console.log)