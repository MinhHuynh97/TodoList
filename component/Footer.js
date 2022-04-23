
import html from '../core.js';
import {connect} from '../store.js'


function Footer({todos,fil,filter}){
    console.log(todos,filter)
    return html`
    <footer class="footer">
				
        <span class="todo-count"><strong>${todos.filter(filter.active).length}</strong> item left</span>
        
        <ul class="filters">
            ${Object.keys(filter).map(type=>html`
                <li>
                    <a class="${fil===type && 'selected'}" href="#" onclick="dispatch('switch','${type}')">${type[0].toUpperCase()+type.slice(1)}
                    
                    </a>
                </li>
            `)}
            
            
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        ${todos.filter(filter.completed).length>0 && html`
        <button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>`
    }
        
    </footer>
    `
}
export default connect()(Footer);