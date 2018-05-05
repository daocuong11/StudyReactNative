import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = { value: 0, highlight : false }, action) => {
    if (action.type === "UP") return { ...state, value: state.value + 1 };
    if (action.type === "DOWN") return { ...state, value: state.value - 1 };
    if (action.type === "HIGHLIGHT") return { ...state, highlight: !state.highlight };
    return state;
}

const store = createStore(reducer);

export default class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('demo_redux01', () => ReduxDemo);
