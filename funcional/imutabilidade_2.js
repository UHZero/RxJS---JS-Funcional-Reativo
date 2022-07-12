const nums  =  [9, 6, 3, 4, 2, 8]

// #3 - recursividade
function somar(array, total = 0) {
    if(array.length === 0){
        return total
    }
    return somar(array.slice(1), total + array[0])
}

const total = somar(nums)
console.log(total)

// #2 - Declarativo - reduce
// const soma = (a, b) => a + b
// const total = nums.reduce(soma)
// console.log(total)

//  #1 - Imperativo - dados mutaveis
// let total = 0
// for( let i = 0; i < nums.length; i++){
//     total += nums[i]
// }
// console.log(total)