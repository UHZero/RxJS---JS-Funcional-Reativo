// setTimeout(function(){
//     console.log('exec callback...')

//     setTimeout(function(){
//         console.log('exec callback...')

//         setTimeout(function(){
//             console.log('exec callback...')

//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 3000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('executando uma promise')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)
