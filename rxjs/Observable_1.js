const { Observable } = require('rxjs')

const obs = new Observable(subscribler => {
    subscribler.next('É')
    subscribler.next('possivel')
    subscribler.next('instanciar')
    subscribler.next('muitas')
    setTimeout(() => {
        subscribler.next('vezes')
        subscribler.complete()
    }, 1000)
})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))

const promise = new Promise(resolve => {
    resolve('Promisse é maneiro, mas não faz stream de dados!')
})
promise.then(console.log)