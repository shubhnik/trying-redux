/**
 * Created by chicmic on 12/06/17.
 */
let id = 1;
export const addTodo = ( text ) => {
    return {
        type:"ADD_TODO",
        text:text,
        id : id++,
        completed:false
    }
};

export const todoCompleted = ( index ) => {
    return{
        type:"TODO_COMPLETED",
        id:index
    }
};

export const setVisibility = (filter) => {
    return{
        type:"SET_VISIBILITY",
        filter:filter
    }
}