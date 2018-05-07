import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        }
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { en, vn } = this.state;
        this.props.dispatch({
            type: 'Add_Word',
            en,
            vn
        })
    }

    render() {
        return (
            <View>
                <TextInput style={styles.inputText}
                    placeholder='English'
                    value={this.state.en}
                    onChangeText={text => this.setState({ en: text })}
                />
                <TextInput style={styles.inputText}
                    placeholder='Vietnamese'
                    value={this.state.vn}
                    onChangeText={text => this.setState({ vn: text })}
                />
                <TouchableOpacity onPress={() => this.onAdd() }>
                    <Text> Add </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputText: {
        height: 50,
        width: 300,
        margin: 10,
        paddingHorizontal: 10,
        backgroundColor: 'green'
    }
});

export default connect()(Form);