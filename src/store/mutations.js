export default {
    TOGGLE_AUTH(state){
        state.auth.isAuthenticated =!state.auth.isAuthenticated;
    },
    MARK_COMPLETED(state,todoId){
        state.todos.map(todo=>{
            if(todo.id===todoId) todo.completed=!todo.completed;
            return todo;
        })
    },
    DELETE_TODO(state,todoId){
        state.todos= state.todos.filter(todo=>todo.id!==todoId)
    },
    ADD_TODO(state,newTodo){
       state.todos.unshift(newTodo);
    },
    SET_TODO(state,todos){
        state.todos=todos;
    }

}