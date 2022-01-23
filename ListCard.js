const template1 = document.createElement('template');
template1.innerHTML = `
	<style>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
		.card{
			width: 100%;
			box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
			border-radius: 5px;
			padding: 15px 20px;
			box-sizing: border-box;
			margin-bottom: 10px;
			background-color: rgb(240,240,240);
			transition-duration: 0.1s;
			display: flex;
			align-items: center;
		}
		.card:hover{
			transform: scale(1.01);
		}
		.card-title{
			margin: 0px;
			text-transform: capitalize;
			flex-grow: 1;
		}
		.complete-btn, .del-btn{
			height: 40px;
			width: 40px;
			font-size: 20px;
			color: white;
			background-color: #f40d30;
			outline: none;
			border: none;
			border-radius: 5px;
			margin-left: 10px;
		}
	</style>
	<div class='card'>
	</div>
`;

class ListCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template1.content.cloneNode(true));

		let div1 = document.createElement('h2');
		div1.className = "card-title";

		let iconDelete = document.createElement('i');
		iconDelete.setAttribute('class', 'fa fa-trash');
		iconDelete.setAttribute('aria-hidden', 'true');

		let div2 = document.createElement('button');
		div2.appendChild(iconDelete);
		div2.className = "del-btn";
		div2.addEventListener("click", function(){
			deleteTask(parseInt(this.getAttribute('task-id')));
		}.bind(this));

		let iconTick = document.createElement('i');
		iconTick.setAttribute('class', 'fa fa-check');
		iconTick.setAttribute('aria-hidden', 'true');
		
		let div3 = document.createElement('button');
		div3.appendChild(iconTick);
		div3.className = "complete-btn";
		div3.addEventListener("click", function(){
			completeTask(parseInt(this.getAttribute('task-id')));
		}.bind(this));

		let card = this.shadowRoot.querySelector('.card')
		card.appendChild(div1);
		card.appendChild(div2);
		card.appendChild(div3);
	}

	static get observedAttributes() {
		return ['task-name'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'task-name') {
			this.shadowRoot.querySelector('.card-title').textContent = newValue;
		}
	}
}

window.customElements.define('list-card', ListCard);