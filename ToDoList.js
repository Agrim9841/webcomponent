
class CardsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['tasks'];
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'tasks') {
            this.shadowRoot.innerHTML = '';

            let tasks = JSON.parse(newValue);
            tasks.forEach(task=>{
                if(!task.completed){
                    let div1 = document.createElement("list-card");
                    div1.setAttribute('task-name', task.name);
                    div1.setAttribute('task-id', task.id);

                    this.shadowRoot.appendChild(div1);
                }
            });
        }
    }
}

window.customElements.define('card-container', CardsContainer);