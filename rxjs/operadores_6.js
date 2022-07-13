const { from, Observable } = require('rxjs')

function newpipeOp (opFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = opFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            })
        })
    }
}

function firstEl () {
    return newpipeOp(subscriber => ({
        next(value){
            subscriber.next(value)
            subscriber.complete()
        }
    }))
}

function lastEl () {
    let el
    return newpipeOp(subscriber => ({
        next(value){
            el = value
        },
        complete(){
            subscriber.next(el)
            subscriber.complete()
        }

    }))
}

from([1, 2, 3, 4])
    .pipe(lastEl())
    .subscribe(console.log)
