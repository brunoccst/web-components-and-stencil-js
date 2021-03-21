/**
 * Web component that contains a button which, when clicked, expands an info box with more text.
 */
customElements.define('show-info', class ShowInfo extends HTMLElement {
    /**
     * Style tag with all CSS for the HTML elements.
     */
    _style = `
        <style>
            .hide {
                display: none;
            }
        </style>
    `;

    /**
     * HTML elements that will be rendered.
     */
    _html = `
        <button>Show</button>
        <p class="hide">
            <slot></slot>
        </p>
    `;

    /**
     * Is the content hidden.
     */
    _isHidden = true;

    /**
     * Button element.
     */
    _button;

    /**
     * Paragraph element with the slotted element.
     */
    _paragraph;

    /**
     * Creates a new instance of the class.
     */
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `${this._style}${this._html}`;
        this._button = this.shadowRoot.querySelector('button');
        this._paragraph = this.shadowRoot.querySelector('p');
    }

    /**
     * Event triggered when the component is attached to DOM.
     * Configures the button click event.
     */
    connectedCallback() {
        this._button.addEventListener('click', this._buttonOnClick.bind(this));
    }

    /**
     * Event triggered when the button is clicked.
     * Toggles the hidden state and update the component's inner HTML.
     */
    _buttonOnClick() {
        this._toggleIsHidden();
        this._updateElements();
    }

    /**
     * Toggles the hidden state.
     */
    _toggleIsHidden() {
        this._isHidden = !this._isHidden;
    }

    /**
     * Updates the elements according to the hidden state.
     */
    _updateElements() {
        const className = "hide";
        if (this._isHidden) {
            this._button.innerText = "Show";
            this._paragraph.classList.add(className);
        }
        else {
            this._button.innerText = "Hide";
            this._paragraph.classList.remove(className);
        }
    }
});