
const firstEl = arrayOrString => arrayOrString[0] 
const smallCase = letter => letter.toLowerCase()

new Promise(function (resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Fabio'])
})
    .then(firstEl)
    .then(firstEl)
    .then(smallCase)
    .then(console.log)