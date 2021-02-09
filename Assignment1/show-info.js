/**
 * Web component that contains a button which, when clicked, expands an info box with more text.
 */
class ShowInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                #info-box {
                    display: none;
                }
            </style>
            <button>Show</button>
            <p id="info-box"><slot></slot></p>
        `;
        this.button = this.shadowRoot.querySelector('button');
        this.infoEl = this.shadowRoot.querySelector('p');
        this.isHidden = true;
        
        this.toggleProperties = {
            buttonText: { true: "Hide", false: "Show" },
            infoElStyleDisplay: { true: "block", false: "none" }
        }
    }

    connectedCallback() {
        this.button.addEventListener('click', this._onClick.bind(this));
    }

    /**
     * Toggles the state and text of the components.
     */
    _onClick() {
        this.isHidden = !this.isHidden;
        this.button.textContent = this.toggleProperties.buttonText[this.isHidden];
        this.infoEl.style.display = this.toggleProperties.infoElStyleDisplay[this.isHidden];
    }
}



customElements.define('show-info', ShowInfo);