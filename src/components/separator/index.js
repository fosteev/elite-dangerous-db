import React, { Component } from 'react';
import {
    View,
} from 'react-native';

class Separator extends Component {
    render() {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    marginLeft: "14%"
                }}
            />
        );
    }
}

export default Separator;