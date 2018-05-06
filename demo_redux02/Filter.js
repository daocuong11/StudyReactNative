import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

class Filter extends Component {
    getStyleText(statusName) {
        if (statusName === this.props.myFilter) return { color: "yellow", fontWeight: "bold" };
        return styles.buttonText;
    }

    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType });
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_SHOW_ALL')}>
                    <Text style={this.getStyleText('SHOW_ALL')}>Show All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_MEMORIZED')}>
                    <Text style={this.getStyleText('MEMORIZED')}>Memorized</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_NEED_PRACTICE')}>
                    <Text style={this.getStyleText('NEED_PRACTICE')}>Need Practice</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(function (state) {
    return {
        myFilter: state.filterStatus,
    };
})(Filter);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#583C3C',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonText: {
        color: 'white'
    }
});