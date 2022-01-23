const template2 = document.createElement('template');
template2.innerHTML = `
	<style>
		.input-bar{
			width: 100%;
			box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
			border-radius: 5px;
			padding: 15px 20px;
			box-sizing: border-box;
			margin-bottom: 10px;
			background-color: rgb(240,240,240);
			transition-duration: 0.1s;
            display: flex;
		}
        .input-field{
            flex: 0.8;
            height: 100%;
        }
        .input-field input{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            font-size: 20px;
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 6px 10px;
        }
        .add-button{
            height: inherit;
            display: block;
            background-color: #f40d30;
            color: white;
            border: none;
            flex: 0.2;
            border-radius: 5px;
            outline: none;
            font-size: 20px;
			box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
            cursor: pointer;
        }
	</style>
	<div class='input-bar'>
        <div class = 'input-field'>
            <input type="text" placeholder="What to do?"/>
        </div>
        <button class = 'add-button'>Add</button>
	</div>
`;

class InputBar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template2.content.cloneNode(true));
        
        this.shadowRoot.querySelector("input").addEventListener("keypress", function(event){
            if(event.key == 'Enter'){
                this.handleAddTask(addTask);
            }else{
                this.taskname += event.key;
            }
        }.bind(this));
        
        this.shadowRoot.querySelector(".add-button").addEventListener("click", function(event){
            this.handleAddTask(addTask);
        }.bind(this));

        this.handleAddTask = function(addTaskFunction){
            let input = this.shadowRoot.querySelector("input");
            let taskname = input.value;
            
            addTaskFunction(taskname);
            
            input.value = '';
        }
	}
}

window.customElements.define('input-bar', InputBar);