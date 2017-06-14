/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Root from './Root'
import App from './App'
import reducer from './Reducers'

const store = createStore(reducer)

export default class redux1 extends Component {
  render() {
    return (
        <Provider store={store}>
          <Root />
        </Provider>
    );
  }
}

AppRegistry.registerComponent('redux1', () => redux1);
