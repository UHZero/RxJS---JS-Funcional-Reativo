const { from, Observable } = require('rxjs')

function newpipeOp (nextFn) {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(value){
                    nextFn(subscriber, value)
                }
            })
        })
    }
}

function firstEl () {
    return newpipeOp((subscriber, value) => {
        subscriber.next(value)
        subscriber.complete()
    })
}

from([1, 2, 3, 4])
    .pipe(firstEl())
    .subscribe(console.log)
