function adicao(a, b) {
    return a + b
}
function subtracao(a, b) {
    return a - b
}
function multiplicacao(a, b) {
    return a * b
}
function divisao(a, b) {
    if (b == 0) {
        return null
    }
    return a / b
}

var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var op = document.getElementsByName('op')
var resultado = document.getElementById('resultado')

function calcular() {
let m1 = parseFloat(n1.value)
let m2 = parseFloat(n2.value)
    if (op[0].checked) {
        var s = adicao(m1, m2)
        resultado.innerText = s
    } else if (op[1].checked) {
        var s = subtracao(m1, m2)
        resultado.innerText = s
    } else if (op[2].checked) {
        var s = multiplicacao(m1, m2)
        resultado.innerText = s
    } else if (op[3].checked) {
        var s = divisao(m1, m2)
        if (s == null) {
            alert('ERRO: DIVISÃO POR ZERO')
        }
    } else {
        resultado.innerText = s
    }
}