/**
 * Created by chicmic on 12/06/17.
 */
import {connect} from 'react-redux'
import Input from '../Components/Input'
import {addTodo} from '../Actions'

/*const mapStateToProps = (state) =>{
    return  state
};*/

const mapDispatchToProps = {
        addTodo
};

export default  InputContainer = connect(
    null,
    {addTodo}
)(Input)
