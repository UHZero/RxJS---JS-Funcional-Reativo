const { Observable } = require('rxjs')

function ofWithDelay (tempo, ...params) {
    return Observable.create(subscriber => {
        (params || []).forEach(( el, i ) => {
            setTimeout(() => {
                subscriber.next(el)
                if(params.length === i + 1) {
                    subscriber.complete()
                }
            },tempo * (1 + i))
        })
    })
}

ofWithDelay(2000, 4, 6, 2, 3, 'arroz', true, [1, 2, 3], { chave: 'valor' })
    .subscribe(console.log)