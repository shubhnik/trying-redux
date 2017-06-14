/**
 * Created by chicmic on 12/06/17.
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

export default class List extends Component{
    render(){
        //alert('props' + JSON.stringify(this.props))
        const { todos , todoCompleted } = this.props;
        return(
            <View style={{flex:10,backgroundColor:'yellow'}} >
                {
                    todos.map((e,index) => {
                        return(
                            <TouchableOpacity
                                key={index}
                                style={{height:50,backgroundColor:e.completed?'pink':'rgb(123,223,178)'}}
                                onPress={ () => todoCompleted(index) }
                            >
                                <Text>{e.text}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}