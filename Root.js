/**
 * Created by chicmic on 14/06/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import  NavigationExperimental  from 'react-native-deprecated-custom-components'
import App from './App'
import Screen2 from './Components/screen2'
export default class Root extends Component{
    render(){
        return(
            <NavigationExperimental.Navigator
                initialRoute={{name: "App"}}
                renderScene={(route, navigator) => {
                        if (route.name === 'App')
                            return (<App navigator={navigator} route={route} />)
                        if ( route.name == "Scene2" )
                            return ( <Screen2 navigator={navigator} route={route} />)
                    }}
            />
        )
    }
}