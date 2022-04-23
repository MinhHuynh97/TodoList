
import html from '../core.js';

function TodoItem({todo,edit}){
    
    return html`
    <li class="${todo.completed && 'completed'} ${edit===todo.id &&'editing'}">
        <div class="view">
            <input class="toggle" 
            type="checkbox" ${todo.completed && 'checked'}
            
            onclick="dispatch('toggle',${todo.id})"
            
            >
            <label ondblclick="dispatch('startEdit',${todo.id})">${todo.title}</label>
            <button onclick="dispatch('deleted',${todo.id})" class="destroy"></button>
        </div>
        <input onkeyup="event.keyCode===13 && dispatch('save',this.value.trim())" 
        onblur="dispatch('save',this.value.trim())"
        class="edit" value="${todo.title}">
    </li>
    `
}
export default TodoItem;