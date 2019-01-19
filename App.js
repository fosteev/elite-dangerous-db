/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import TabRouter from './src/tabRouter';
//import React, {Component} from 'react';
//import {BackHandler} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './src/reducers';
//import I18n from "react-native-i18n";
//import App from './src/Navigators';

export const store = createStore(AppReducer, applyMiddleware(thunk));

console.disableYellowBox = true;


export default class App extends Component {
    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', function () {
        //     // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
        //     // Typically you would use the navigator here to go to the last state.
        //
        //     console.log('BACK HANDLEEERRRR');
        // });
    }

    render() {
        return (
            <Provider store={store}>
                <TabRouter/>
            </Provider>
        );
    }
}