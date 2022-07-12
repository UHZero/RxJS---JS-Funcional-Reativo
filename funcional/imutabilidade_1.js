function ordenar(array) {
    return [...array].sort()
}

const nums = [5, 9, 3, 1, 6]
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)