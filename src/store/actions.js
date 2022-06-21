
import axios from 'axios';
const actions={
    async deleteTodo({commit},todoId){
        try{
            commit('DELETE_TODO',todoId)
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            
        }catch(e){
            console.log(e);
        }
        
    },
    async addtodo({commit},newTodo){
        try{
            await axios.post("https://jsonplaceholder.typicode.com/todos/",newTodo)
        
        }catch(e){
            console.log(e);
        }
        commit('ADD_TODO',newTodo)
    },
    async getTodo({commit}){
        try{
          
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        commit('SET_TODO',response.data)  
        }catch(e){
            console.log(e);
        }
       
    }
}

export default actions;