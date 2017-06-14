/**
 * Created by chicmic on 13/06/17.
 */

import {connect} from 'react-redux'
import Input from '../Components/Input'
import {addTodo,todoCompleted} from '../Actions'
import List from '../Components/List'

const mapStateToProps = (state) =>{
    const todos = state.todos.filter((object) => {
        if(state.visibilityFilter == "SHOW_COMPLETED"){
            if(object.completed == true ){
                return object
            }
        }else if(state.visibilityFilter == "SHOW_ACTIVE"){
            if(object.completed == false ){
                return object
            }
        }else{
            return object
        }
    });
    return {todos:todos}
};

const mapDispatchToProps  = {
    todoCompleted
};
export default  ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
