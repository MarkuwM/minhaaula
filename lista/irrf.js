function previdencia(salario){
    if(salario <= 2259.20){
        return(salario * 0.075)
    }else if(salario <= 2826.65){
        return(salario * 0.15) - 169.44
    }else if(salario <= 3751.05){
        return(salario * 0.225) - 381.44
    }else if(salario <= 4664.68){
        return(salario * 0.275) - 662.77
    }else{
        return(4664.68 * 0.275) - 896.00
    }
}
var imposto = previdencia(3000)
document.write(`<h1>Seu IRRF é ${imposto}</h1>`)