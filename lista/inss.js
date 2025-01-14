function previdencia(salario){
    if(salario <= 1412){
        return(salario * 0.075)
    }else if(salario <= 2666.68){
        return(salario * 0.09)
    }else if(salario <= 4000.03){
        return(salario * 0.12)
    }else if(salario <= 7786.02){
        return(salario * 0.14) - 181.18
    }else{
        return(7786.02 * 0.14) - 181.18
    }
}
var imposto = previdencia(3000)
document.write('<h1>Seu INSS é ${imposto}</h1>')