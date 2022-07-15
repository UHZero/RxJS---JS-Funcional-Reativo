const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)
const sub = new Subscription()

const subscription1 = obs.subscribe(num => console.log(`#1 gerou: ${num}`))
const subscription2 = obs.subscribe(num => console.log(`#2 gerou: ${num}`))

sub.add(subscription1)
sub.add(subscription2)


setTimeout(() => {
    sub.unsubscribe()
}, 10000)