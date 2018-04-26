import {withComponent, props, define} from 'skatejs';


// base class to extend, same trick as before
class HTMLCustomElement extends HTMLButtonElement {
    constructor(_) { return (_ = super(_)).init(), _; }
    init() { /* override as you like */ }
}

export default class Task extends withComponent(class extends HTMLCustomElement {}) {
    static is = 'app-task';
    static props = {
        done: {...props.boolean, ...{attribute: true}},
    };

    // do not use ShadowDOM
    get renderRoot() {
        return this;
    }

    init() {
        console.log('app-task constructor');

        this.addEventListener("click", () => {
            this.done = !this.done;
        });
    }

    connected() {
        console.log('app-task connectedCallback');
    }

    render() {
        console.log('app-task render; done =', this.done);
        return `${this.done ? 'done' : 'todo'}`;
    }
}
window.customElements.define('app-task', Task, {extends: 'button'});
