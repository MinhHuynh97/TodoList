import storage from "./util/storage.js";
const init={
    todos:storage.get(),
    fil:'all',
    filter:{
        all:()=>true,
        active:todos=>!todos.completed,
        completed:todos=>todos.completed
    },
    edit:null
}

const actions={
    add({todos},title){
        if(title)
        {
            
            todos.push({title,completed:false,id:todos.length});
            storage.set(todos);
            

        }
    },
    toggle({todos},index)
    {
        const todo=todos[index];
        todo.completed=!todo.completed;
        storage.set(todos);

    },
    toggleAll({todos},completed){
        todos.forEach(element => {
            element.completed=completed
        });
        storage.set(todos)
    },
    deleted({todos},index){
        todos.splice(index,1);
        storage.set(todos)

    },
    switch(state,type){
        state.fil=type
        // storage.set(todos)

    },
    clearCompleted(state){
        state.todos=state.todos.filter(state.filter.active);
        storage.set(state.todos)

    },
    startEdit(state,index){
        state.edit=index;
        // storage.set(state.todos)

    },
    save(state,title){
        if(state.edit!=null){
            if(title)
            {
                state.todos[state.edit].title=title
                storage.set(state.todos)
                
            }else{
                this.deleted(state,state.edit);
            }
            
            state.edit=null;

        }
    }
}

export default function reducer(state=init,action,args){
   actions[action] && actions[action](state,...args);
   return state
    
}