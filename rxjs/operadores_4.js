const { from, Observable } = require('rxjs')

function firstEl(){
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(value){
                    subscriber.next(value)
                    subscriber.complete()
                }
            })
        })
    }
}

function noneEl(){
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(value){
                    subscriber.complete()
                }
            })
        })
    }
}

function lastEl(){
    return function(source){
        return Observable.create(subscriber => {
            let last
            source.subscribe({
                next(value){
                    last = value
                },
                complete() {
                    subscriber.next(last)
                    subscriber.complete()
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(lastEl())
    .subscribe(console.log)