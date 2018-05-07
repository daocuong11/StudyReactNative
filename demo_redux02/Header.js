import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text />
                <Text>My Words</Text>
                <TouchableOpacity onPress={() => this.props.dispatch({ type: 'ISADD' })}>
                    <Text>+</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default connect()(Header);