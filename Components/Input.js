/**
 * Created by chicmic on 12/06/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';


import {connect} from 'react-redux'
import { addTodo } from '../Actions'

class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <TextInput
                    selectionColor="yellow"
                    onChangeText={(text) => this.setState({text}) }
                    style={{paddingTop:5,paddingLeft:10,flex:1,backgroundColor:'green'}}
                    onSubmitEditing={ () => this.props.addTodo(this.state.text) }
                    placeholder="Enter a task"
                />
            </View>
        )
    }
}

export default connect(null,
    {addTodo})(Input)




