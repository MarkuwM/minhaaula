function fatorial(n){
    var f = 1
    for(var i = 1; i <= n; i++){
        f = f * i
    }
    return f
}

var resultado = fatorial(5)
document.write(resultado)