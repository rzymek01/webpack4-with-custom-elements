// base class to extend, same trick as before
class HTMLCustomElement extends HTMLButtonElement {
    constructor(_) { return (_ = super(_)).init(), _; }
    init() { /* override as you like */ }
}

export default class Task extends HTMLCustomElement {
    static get observedAttributes() {
        return ['done'];
    }

    init() {
        console.log('app-task constructor');

        this.name = '#number';

        this.addEventListener("click", () => {
            this.done = !this.done;
        });
    }

    connectedCallback() {
        console.log('app-task connectedCallback');

        this.render();
    }

    disconnectedCallback() {
        console.log('app-task disconnectedCallback');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('app-task attributeChangedCallback', attrName, oldVal, newVal);

        this.render();
    }

    adoptedCallback() {
        console.log('app-task adoptedCallback');
    }

    render() {
        console.log('app-task render; done =', this.done);
        this.innerHTML = `${this.name}: ${this.done ? 'done' : 'todo'}`;
    }

    get done() {
        return this.hasAttribute('done');
    }

    set done(val) {
        if (val) {
            this.setAttribute('done', '');
        } else {
            this.removeAttribute('done');
        }
    }
};
window.customElements.define('app-task', Task, {extends: 'button'});