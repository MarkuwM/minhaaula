function vetores() {
    var A = [2, 4, 6];
    var B = [8, 10, 12];
    var C = [];

    for (var i = 0; i < A.length; i++) {
        C.push(A[i] * B[i]);
    }
    return C;
}

document.write("Resultado da multiplicação: " + vetores().join(", "));
