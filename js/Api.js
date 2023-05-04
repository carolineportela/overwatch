export const carregarCards = async() => {
    const url = `https://overfast-api.tekrop.fr/heroes`
    const response = await fetch(url)
    const card = await response.json()

    return card
}

export const personagensPosicoes = async() => {
    const url = `https://overfast-api.tekrop.fr/heroes`
    const response = await fetch(url)
    const card = await response.json()

    return card
}


const info = localStorage.getItem('info')