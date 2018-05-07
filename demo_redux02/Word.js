import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {
    memorizedWord() {
        this.props.dispatch({
            type: 'MEMORIZED',
            id: this.props.myWord.id
        });
    }

    showWord() {
        this.props.dispatch({
            type: 'DISPLAY_WORD',
            id: this.props.myWord.id
        });
    }

    render() {
        const { vn, en, memorized, isShow } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedText = memorized ? 'forget' : 'memorized';
        const meaning = isShow ? vn : '-----';
        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text>{meaning}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity onPress={this.memorizedWord.bind(this)}>
                        <Text>{memorizedText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.showWord.bind(this)}>
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10
    },
    controller: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default connect()(Word);