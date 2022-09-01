const arrayNumeros = [14, 11, 7, 3, 28]
const arrayStrings = ["abacate", "morango","manga"]
const arrayMista = [23, "laranja", true]
console.log(arrayNumeros, arrayNumeros.length)
console.log(arrayStrings, arrayStrings.length)
console.log(arrayMista, arrayMista.length)

const copia1 = arrayNumeros[0]
const copia2 = arrayStrings[1]
const copia3 = arrayMista[2]

console.log(copia1)
console.log(copia2)
console.log(copia3)

console.log(arrayNumeros.includes(28))
console.log(arrayMista.includes("abacate"))

