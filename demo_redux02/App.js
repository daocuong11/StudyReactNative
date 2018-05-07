import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './Main.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const defaultState = {
  arrWord: [
    { id: 1, en: "arrange", vn: "sắp xếp", memorized: false, isShow: false },
    { id: 2, en: "action", vn: "hành động", memorized: true, isShow: true },
    { id: 3, en: "love", vn: "yêu", memorized: false, isShow: false },
    { id: 4, en: "like", vn: "thích", memorized: false, isShow: false },
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
      return { ...state, filterStatus: 'SHOW_ALL' };
    case 'FILTER_MEMORIZED':
      return { ...state, filterStatus: 'MEMORIZED' };
    case 'FILTER_NEED_PRACTICE':
      return { ...state, filterStatus: 'NEED_PRACTICE' };
    case 'MEMORIZED':
      return {
        ...state,
        arrWord: state.arrWord.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, memorized: !e.memorized };
        })
      };
    case 'DISPLAY_WORD':
      return {
        ...state,
        arrWord: state.arrWord.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, isShow: !e.isShow };
        })
      };
    case 'ISADD':
      return {
        ...state,
        isAdding: !state.isAdding
      };
    case 'Add_Word':
      return {
        ...state,
        arrWord: state.arrWord.concat({
          en: action.en,
          vn: action.vn,
          isShow: false,
          memorized: false
        }),
        isAdding: false
      }
  }
  return state;
}

const store = createStore(reducer);