function gerarNums (fn) {
    return {
        iniciar(fn, intervalo = 1000) {
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, intervalo)
            
            return {
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}

const temporizador = gerarNums()
const exec = temporizador.iniciar(num => {
    console.log(`#1: ${num}`)
})
const execMais = temporizador.iniciar(num => {
    console.log(`#1.1: ${num + 1}`)
}, 500)

const temporizador_ = gerarNums()
const exec_ = temporizador_.iniciar(num => {
    console.log(`#2: ${num * 100}`)
}, 2000)

setTimeout(() => {
    exec.parar()
    execMais.parar()
}, 10000)

setTimeout(() => {
    exec_.parar()
}, 18000)