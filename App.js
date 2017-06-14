/**
 * Created by chicmic on 12/06/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import InputContainer from './Containers/InputContainer'
import List from './Containers/ListConatiner'
import Input from './Components/Input'
import FilterContainer from './Containers/filterContainer'

export default class App extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Input />
                <ListContainer navigator={this.props.navigator} route={this.props.route} />
                <FilterContainer />
            </View>
        )
    }
}