function SOMA (numero) {
    var num = 4
    var soma = [4]
    for (i = 0; i < 3; i++) {
        soma[i] = num++;
    }
    return soma;
}
document.write(SOMA)