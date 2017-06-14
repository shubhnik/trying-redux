/**
 * Created by chicmic on 14/06/17.
 */
import {connect} from 'react-redux'
import Filter from '../Components/filterOption'
import { setVisibility } from '../Actions'

mapStateToProps = (state) => {
    return { active:state.visibilityFilter }
};

export default connect(mapStateToProps,
    {setVisibility})(Filter)
