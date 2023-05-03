'use strict'

// import { } from "";

// const  = await();

const criarCardPersonagem = (personagem) => {

    const containerCard = document.createElement('div')
    containerCard.classList.add('cards-personagens')

    const imgPersonagem = document.createElement('img')
    imgPersonagem.classList.add('img-personagem')
    imgPersonagem.src = `${name.portrait}`

    

    containerCard.append(imgPersonagem)

    return containerCard
}
