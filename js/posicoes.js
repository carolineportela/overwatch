'use strict'

import { personagensPosicoes } from "../js/Api.js"

const cards = await personagensPosicoes()

const personagemDados = (dados) => {

    const containerPosicoes = document.createElement('div')
    containerPosicoes.classList.add('container-posicoes')

    const container = document.createElement('div')
    container.classList.add('container')

    const containerDoCard = document.createElement('div')
    containerDoCard.classList.add('container-info')

    const cardPersonagemInfo = document.createElement('div')
    cardPersonagemInfo.classList.add('card-personagem-info')

    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('img-personagem')
    imgPersonagem.src = `${dados.portrait}`

    const nome = document.createElement('h2')
    nome.classList.add('nome')
    nome.textContent = dados.name.toUpperCase()

    const posicao = document.createElement('h2')
    posicao.classList.add('posicao')
    posicao.textContent = dados.role.toUpperCase()


    containerPosicoes.append(container)
    container.append(containerDoCard)
    containerDoCard.append(cardPersonagemInfo)
    cardPersonagemInfo.append(imgPersonagem,nome,posicao)

    return containerPosicoes
}

const carregarCard = () => {
    const elementosDoContainer = document.getElementById('container-posicoes')

    const personagemInfo = cards.info.map(personagemDados)

    elementosDoContainer.replaceChildren(...personagemInfo)
}


carregarCard()