/**
 * Created by chicmic on 12/06/17.
 */

//const initialstate={count:1}
const initialState = { visibilityFilter:"SHOW_ALL" , todos: [] };
const reducer = ( state = initialState , action ) => {
    //alert("reducer" + state.count)
    switch(action.type){
        case "ADD_TODO":
            return { ... state , todos: [ ...state.todos , { text: action.text, id: action.id , completed:action.completed} ] };
        case "TODO_COMPLETED":
            return { ...state , todos: state.todos.map((object) => {
                        if(object.id==action.id){
                            object.completed = !object.completed
                        }
                return object
                    })
            };
        case "SET_VISIBILITY":
            return{
                ...state , visibilityFilter:action.filter
            };
        default:
            return state
    }
};

export default reducer;