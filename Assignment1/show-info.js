/**
 * Web component that contains a button which, when clicked, expands an info box with more text.
 */
class ShowInfo extends HTMLElement {
    constructor() {
        super();
        this.isHidden = true;

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
    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector('button');
        this.infoEl = this.shadowRoot.querySelector('p');

        this.button.addEventListener('click', this._onClick.bind(this));
    }

    /**
     * Toggles the state and text of the components.
     */
    _onClick() {
        if (this.isHidden) {
            this.infoEl.style.display = 'block';
            this.button.textContent = 'Hide';
            this.isHidden = false;
        } else {
            this.infoEl.style.display = 'none';
            this.button.textContent = 'Show';
            this.isHidden = true;
        }
    }
}



customElements.define('show-info', ShowInfo);