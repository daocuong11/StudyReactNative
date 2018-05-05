import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


class ChangeColor extends Component {
    render() {
        const color = this.props.highlight ? 'black' : 'blue';
        return (
            <TouchableOpacity onPress={() => {
                this.props.dispatch({ type: 'HIGHLIGHT' })
            }}>
                <Text style={{color}}> Change Color </Text>
            </TouchableOpacity>
        );
    }
}


export default connect(function(state){
    return {highlight: state.highlight};
})(ChangeColor);