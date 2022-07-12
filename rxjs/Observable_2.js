const { Observable } = require('rxjs')

const obs$ = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso!!!')

    if(Math.random() < 0.5){
        subscriber.complete()
    } else {
        subscriber.error('Que Problema?!?')
    }
})

obs$.subscribe(
    valor => console.log(`#1 Valor: ${valor}`),
    erro => console.log(`#1 Erro: ${erro}`),
    () => console.log('#1 Fim!')
)

obs$.subscribe({
    next(valor){
        console.log(`#2 Valor: ${valor}`)
    },
    error(msg){
        console.log(`#2 Erro: ${msg}`)
    },
    complete(){
        console.log('#2 Fim!')
    }
})