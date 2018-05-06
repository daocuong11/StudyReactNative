import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Word from './Word.js'
import Filter from './Filter.js'

class Main extends Component {
    getWordList() {
        const { myFilter, arrWord } = this.props;
        if (myFilter === 'SHOW_ALL') return arrWord;
        if (myFilter === 'MEMORIZED') return arrWord.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE') return arrWord.filter(e => !e.memorized);
    }

    render() {
        return (
            <View style={{ backgroundColor: "yellow", flex: 1, alignSelf: "stretch", justifyContent: "center" }}>
                <View style={{ flex: 5 }}>
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <Filter />
            </View>
        );
    }
}

function mapState(state) {
    return {
        myFilter: state.filterStatus,
        arrWord: state.arrWord
    }
}

export default connect(mapState)(Main);