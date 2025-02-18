'use strict'

async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()
    return (data.message)
}

function criarImagens(link){
    const galeria = document.getElementById('gl')
    const novaImg = document.createElement('img')
    novaImg.src = link

    galeria.appendChild(novaImg)
}


async function preencherFoto(){
    const raca = document.getElementById('raca').value
    const fotos = await pesquisarFotos (raca)
    const galeria = document.getElementById('gl')

    galeria.replaceChildren('')
    fotos.forEach(criarImagens)

   
}

document.getElementById('pesquisar').addEventListener('click', preencherFoto )


