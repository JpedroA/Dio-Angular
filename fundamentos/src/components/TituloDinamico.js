class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        
        const shadow = this.attachShadow({mode: "open"})

    }    
}

customElements.define('titulo-dinamico', TituloDinamico);