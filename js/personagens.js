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

    const containerCard = document.createElement('div')
    containerCard.classList.add('cards-personagens')
    
    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('img-personagem')
    imgPersonagem.src = `${card.portrait}`

    const containerNomePosicao = document.createElement('div')


    const nome = document.createElement('p')
    nome.classList.add = ('p-nome')
    nome.textContent = `Name: ${card.name}`

    const posicao = document.createElement ('p')
    posicao.classList.add = ('p-posicao')
    posicao.textContent = `Role: ${card.role}`
    console.log(posicao);

    containerPaizao.append(containerConteudos)
    containerConteudos.append(containerPersonagens, containerNomePosicao)
    containerPersonagens.append(containerCard)
    containerCard.append(imgPersonagem)
    containerNomePosicao.append(nome, posicao)


    //teste
    const info = document.createElement('span')
    info.textContent = card.info

    return containerPaizao
}

 export const carregarCard = () => {
    const elementosDoContainer = document.getElementById('container-personagens')

    //esse cards é o do import
    const personagem = cards.map(criarCardPersonagem)

    elementosDoContainer.replaceChildren(...personagem)
}

// carregarCard()