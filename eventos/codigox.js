function alterarTexto(){
    var titulo = document.getElementById('titulo')
    titulo.innerText = 'Clicou no Botão'
}
function mudarCor(){
    var titulo = document.getElementById('titulo')
    titulo.style.color = 'blue'
    titulo.style.backgroundColor = 'pink'
}
function voltarCor(){
    var titulo = document.getElementById('titulo')
    titulo.style.color = 'black'
    titulo.style.backgroundColor = 'white'
}
var h1 = document.getElementById('titulo')
var button = document.getElementById('botao')

button.addEventListener('click', alterarTexto)
button.addEventListener('mouseover', function(){
    alert('Passou em cima do botão')
})
h1.addEventListener('mouseover', mudarCor)
h1.addEventListener('mouseout', voltarCor)