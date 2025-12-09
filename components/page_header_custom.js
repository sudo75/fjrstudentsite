class pageHeader extends HTMLElement {
    #stdheight = 75;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div style="height: ${this.#stdheight}px"></div>
        `;
    }

    async connectedCallback() {
        const response = await fetch('./components/page_header.html');
        const html = await response.text();

        // Ensure minimal CLS
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    height: ${this.#stdheight}px;
                }
            </style>
            <div style="height: ${this.#stdheight}px"></div>
            ${html}
        `;
    }
}


customElements.define('page-header-custom', pageHeader);