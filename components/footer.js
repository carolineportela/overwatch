'use strict'

class footer extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })   
        this.copyright = 'Desenvolvido por Caroline Portela | 2023'
    }

    static get observedAttributes(){
        return ['copyright']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.append(this.component())
        this.shadow.appendChild(this.styles())

}

styles(){
    const css = document.createElement('style')
    css.textContent = `
 
    .copyright{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 2rem;
     
    }
    `
    return css
}

    component(){
        const copyright = document.createElement('p')
        copyright.classList.add('copyright')
        copyright.textContent = this.copyright
        return copyright
    }

}

customElements.define('footer-components', footer)