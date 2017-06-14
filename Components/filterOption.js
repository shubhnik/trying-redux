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

import {connect} from 'react-redux'
import {setVisibility} from '../Actions'
export default class FilterOption extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'cyan',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <Text
                    onPress={()=>this.props.setVisibility("SHOW_ALL")}
                    style={{textDecorationLine:'underline',color:this.props.active == "SHOW_ALL" ? 'red' : null}}
                >
                    Show all
                </Text>
                <Text
                    onPress={()=>this.props.setVisibility("SHOW_COMPLETED")}
                    style={{textDecorationLine:'underline',color:this.props.active == "SHOW_COMPLETED" ? 'red' : null}}
                >
                    Show completed
                </Text>
                <Text
                    onPress={()=>this.props.setVisibility("SHOW_ACTIVE")}
                    style={{textDecorationLine:'underline',color:this.props.active == "SHOW_ACTIVE" ? 'red' : null}}
                >
                    Show active
                </Text>
            </View>
        )
    }
}