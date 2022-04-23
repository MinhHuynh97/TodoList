
import html from '../core.js';
import {connect} from '../store.js'
import TodoItem from './TodoItem.js';
function TodoList({todos,fil,filter,edit}){
    
    return html`
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox"
        onchange="dispatch('toggleAll',this.checked)"
        ${todos.every(filter.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todos
                .filter(filter[fil])
                .map((todo)=>
                    `${TodoItem({todo,edit})}`
                )}
            

        </ul>
    </section>
    `
}
export default connect()(TodoList);