/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {fetchLoups} from '../../actions/loups';
import {connect} from 'react-redux';

class App extends Component {
    componentWillMount() {
        this.props.getLoups();
    }

    render() {
        console.log(this.props.loups);
        return (
            <View>
                <Text>aaaa</Text>
            </View>
        )
    }
}

const mapStateProps = (state) => {
    return {
        state: state.state,
        loups: state.loups
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getLoups: () => dispatch(fetchLoups())
    })
}

export default connect(mapStateProps, mapDispatchToProps)(App);
