const arrayNumeros = [14, 11, 7, 3, 28]
const arrayStrings = ["abacate", "morango","manga"]
const arrayMista = [23, "laranja", true]

const copia1 = arrayNumeros.slice(
    arrayNumeros.push(23)
)
const coipia2 = arrayStrings.slice()
arrayStrings.pop()
const copia3 = arrayMista.slice()
arrayMista.splice(1,1)

console.log (arrayNumeros, copia1)
console.log(arrayStrings, coipia2)
console.log(arrayMista,copia3)



