var imagem = document.getElementById('imagem')
var lista = document.getElementById('lista')
var titulo = document.getElementById('titulo')

function mudarFoto(){
    imagem.src = lista.value
    let p = lista.selectedIndex
    titulo.innerText = lista.options[p].innerText
}

lista.addEventListener('change', mudarFoto)