'use strict'

import { carregarCards } from "../js/Api.js"

const cards = await carregarCards()

const criarCardPersonagem = (card) => {

    const containerPaizao = document.createElement('div')
    containerPaizao.classList.add('container-personagens')

    const containerConteudos = document.createElement('div')
    containerConteudos.classList.add('container-conteudos')

    const containerPersonagens = document.createElement('div')
    containerPersonagens.classList.add('personagens')

    const containerCard = document.createElement('a')
    containerCard.classList.add('cards-personagens')
    containerCard.setAttribute('href', '../pages/posicoes.html')

    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('img-personagem')
    imgPersonagem.src = `${card.portrait}`

    containerPaizao.append(containerConteudos)
    containerConteudos.append(containerPersonagens)
    containerPersonagens.append(containerCard)
    containerCard.append(imgPersonagem)

    return containerPaizao
}

const carregarCard = () => {
    const elementosDoContainer = document.getElementById('container-personagens')

    //esse cards é o do import
    const personagem = cards.map(criarCardPersonagem)

    elementosDoContainer.replaceChildren(...personagem)
}

carregarCard()