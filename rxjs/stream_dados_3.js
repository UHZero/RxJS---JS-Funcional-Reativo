const { interval } = require('rxjs')

const gerarNums = interval(500)

const sub1 = gerarNums.subscribe(num => {
    console.log(Math.pow(2, num))
})

const sub2 = gerarNums.subscribe(console.log)

setTimeout(() => {
    sub1.unsubscribe()
}, 4000)

setTimeout(() => {
    sub2.unsubscribe()
}, 8000)