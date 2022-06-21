const getters ={
    doneTodos: state=>state.todos.filter(todos=>todos.completed),
    progress: (state,getters)=>{
        const doneTodos = getters.doneTodos;
        return Math.round(doneTodos.length/state.todos.length*100)
    }
}

export default getters;