const helloWorld = [
    ['o', 'l', 'a'],
    [' '],
    ['m', ['u'], 'n', ['d', 'o']],
    ['!', '!', '!']
]

const helloWorldFlat = helloWorld.flat(Infinity)
    .map(l => l.toUpperCase())
    .reduce((a, b) => a + b)
console.log(helloWorldFlat)