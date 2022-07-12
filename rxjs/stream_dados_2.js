function gerarElementos(array) {
    return {
        iniciar(fn){
            let indice = 0
            const i = setInterval(() => {
                if(indice >= array.length){
                    clearInterval(i)
                } else {
                    fn(array[indice])
                    indice++
                }
            }, 1000)
            return {
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const temp = gerarElementos(nums)

const exec1 = temp.iniciar(param => {
    console.log(`EXEC: ${Math.pow(2, param)}`)
})

setTimeout(() => {
    exec1.parar()
}, 4000)

gerarElementos(['Elemento 1', 'Elemento 2', 'Elemento 3'])
    .iniciar(console.log)

