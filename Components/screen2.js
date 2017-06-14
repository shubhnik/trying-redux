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
        alert(this.props.store)
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'pink'}}>
                <Text>hello</Text>
            </View>
        )
    }
}

export default connect()(Screen2)
