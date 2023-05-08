'use strict'

import { maps } from "../js/Api.js"

const cards = await maps()

const getMapas = (mapa) => {

    const containerConteudos = document.createElement('div')
    containerConteudos.classList.add('container-conteudos')

    const cardMapa = document.createElement('div')
    cardMapa.classList.add('card-mapas')

    const nome = document.createElement('span')
    nome.classList.add('nome-mapa')
    nome.textContent = `${mapa.name}`

    const imgMapa = document.createElement('img')
    imgMapa.classList.add('img-mapa')
    imgMapa.src = `${mapa.screenshot}`

    const localizacao = document.createElement('span')
    localizacao.classList.add('localizacao')
    localizacao.textContent = `${mapa.location}`

    containerConteudos.append(cardMapa)
    cardMapa.append(nome,imgMapa,localizacao)

    return containerConteudos
}

export const carregarMapa = () => {
    const elementosDoContainer = document.getElementById('container-conteudos')
    const mapa = cards.map(getMapas)

    elementosDoContainer.replaceChildren(...mapa)
}