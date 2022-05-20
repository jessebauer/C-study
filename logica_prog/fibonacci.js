let contador = 15
let numAtual = 1
let numAnterior = 0
let fibonacci = []


while (contador > 0) {

    fibonacci.push(numAtual)

    numAtual += numAnterior
    numAnterior = numAtual - numAnterior

    contador--
}

alert(fibonacci)
