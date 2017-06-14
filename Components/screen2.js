/**
 * Created by chicmic on 14/06/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

class Screen2 extends Component {

    componentDidMount(){
        alert(JSON.stringify((this.props.todos)))
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'pink'}}>
                <Text>hello</Text>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps,null)(Screen2)
