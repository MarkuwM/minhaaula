var texto = document.getElementById('titulo')

texto.style.color = 'blue'
texto.innerHTML = 'Mustang'

var paragrafos = document.getElementsByTagName('p')
paragrafos[0].style.color = 'red'
paragrafos[1].style.color = 'blue'

var caixa = document.getElementById('caixa')
caixa.innerHTML = '<a href="#">Clique Aqui</a>'
alert(caixa.innerHTML)

var foto = document.getElementById('foto')
foto.setAttribute('src', 'e46.webp')
foto.setAttribute('alt', 'bmw e46')
foto.setAttribute('width', '400')