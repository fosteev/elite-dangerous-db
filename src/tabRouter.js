/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Stack, Scene, Router} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';
import AppLoups from './screens/loups/index';

export default function TabRouter() {
    return (
        <Router>
            <Stack key="root">
                <Scene key="tabbar" tabs={true} hideNavBar={true}>
                    <Scene key="login" component={() => <AppLoups />} title="Login"/>
                    <Scene key="register" component={() => <Text>Reg</Text>} title="Register"/>
                    <Scene key="home" component={() => <Text>Home</Text>}/>
                </Scene>
            </Stack>
        </Router>
    )
}