'use strict'

import { maps } from "../js/Api.js"

const cards = await maps()

const getMapas = (mapa) => {

    const containerConteudos = document.createElement('div')
    containerConteudos.classList.add('container-conteudos')

    const cardMapa = document.createElement('div')
    cardMapa.classList.add('card-mapas')

    const imgMapa = document.createElement('img')
    imgMapa.classList.add('img-mapa')
    imgMapa.src = `${mapa.screenshot}`

    containerConteudos.append(cardMapa)
    cardMapa.append(imgMapa)

    return containerConteudos
}

export const carregarMapa = () => {
    const elementosDoContainer = document.getElementById('container-conteudos')
    const mapa = cards.map(getMapas)

    elementosDoContainer.replaceChildren(...mapa)
}