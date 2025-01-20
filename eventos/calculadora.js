function adicao(a, b){
    return a + b
}
function subtracao(a, b){
    return a - b
}
function multiplicacao(a, b){
    return a * b
}
function divisao(a, b){
    if(b == 0){
        return null
    }
    return a / b
}
function calcular(){
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var op = document.getElementsByName('op')
    var resultado = document.getElementById('resultado').value
    if(op[0].checked){
        var s = adicao(n1, n2)
        resultado.innerText = s
    } else if(op[1].checked){
        var s = subtracao(n1, n2)
        resultado.innerText = s
    } else if(op[2].checked){
        var s = multiplicacao(n1, n2)
        resultado.innerText = s
    } else if(op[3].checked){
        var s = divisao(n1, n2)
        if(s == null){
            alert('ERRO: DIVISÃO POR ZERO')
        }
    } else {
        resultado.innerText = s
    }
}    