const { readFile } = require('fs')
const readline = require('readline')

function obterResposta (pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

function pessoa1 (){
    console.log('to com sono!')
}

function pessoa2 (){
    console.log('to com sono tambem!')
}

async function cama(sonhadores){
    while(true){
        const resp = await obterResposta('Vamos dormir?! (s/N/q) ')
        if(resp.toLowerCase() === 's'){
            (sonhadores || []).forEach(obs => obs())
        } else if (resp.toLowerCase() === 'q') {
            break
        }

    }
}

cama([pessoa1, pessoa2])