const { Observable } = require('rxjs')

function entre(min, max){
    return Observable.create(subscriber => {
        // if(max < min) [min, max] = [max, min]
        Array(max - min + 1).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
        // let num = min
        // while(num <= max){
        //     subscriber.next(num)
        //     if(num === max){
        //         subscriber.complete()
        //     }
        //     num++
        // }
    })
}

function entre$ (min, max) {
    return Observable.create(subscriber => {
        if(max < min) [min, max] = [max, min]
        for(let i = min; i <= max; i++){
            subscriber.next(i)
        }
        subscriber.complete()
    })
}

entre$(4, 10)
    .subscribe({
        next(num){
            console.log(`NUM ${num}`)
        },
        error(err){
            console.log(err)
        },
        complete(){
            console.log('Fim!')
        }
    })