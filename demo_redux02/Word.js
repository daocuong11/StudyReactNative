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

    render() {
        const { vn, en, memorized } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedText = memorized ? 'forget' : 'memorized';
        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text>{vn}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity onPress={this.memorizedWord.bind(this)}>
                        <Text>{memorizedText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
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