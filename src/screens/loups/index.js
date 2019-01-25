/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    RefreshControl,
    FlatList,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import {fetchLoups} from '../../actions/loups';
import {connect} from 'react-redux';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


class App extends Component {
    componentWillMount() {
        this.props.getLoups();
    }

    onGetLoups() {
        this.props.getLoups();
    }

    getHeader = (item) => {
        return (
            <View style={[styles.header, styles.borderBottom]}>
                <Text style={styles.text}>
                    {`Distance: ${item.distance.toFixed(2)} ly`}
                </Text>
            </View>
        )
    }

    getContent = item => {
        const iconSize = 15;
        const iconColor = '#232F34';
        return (
            <View style={[styles.row]}>
                <View style={[styles.column, {flex: 1}]}>
                    <View style={styles.row}>
                        <Icon name="globe" size={iconSize} color={iconColor}/>
                        <Text style={styles.metaText}>{item.oneSystemName}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="building" size={iconSize} color={iconColor}/>
                        <Text style={styles.metaText}>{item.oneStationName}</Text>
                    </View>
                </View>

                <View style={[styles.column, {alignItems: 'flex-end'}]}>
                    <View style={styles.row}>
                        <Text style={styles.metaText}>{item.twoSystemName}</Text>
                        <Icon name="globe" size={iconSize} color={iconColor}/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.metaText}>{item.twoStationName}</Text>
                        <Icon name="building" size={iconSize} color={iconColor}/>
                    </View>
                </View>
            </View>
        )
    }

    getContentBuy = item => {
        const iconSize = 15;
        const iconColor = '#232F34';
        return (
            <View style={[styles.row, styles.borderBottom]}>
                <View style={[styles.column, {flex: 1}]}>
                    <View style={styles.row}>
                        <Icon name="cube" size={iconSize} color={iconColor}/>
                        <Text style={styles.metaText}>{item.oneStationBuy}</Text>
                        <Icon name="arrow-right" size={iconSize} color={iconColor}/>
                    </View>
                </View>

                <View style={[styles.column, {alignItems: 'flex-end'}]}>
                    <View style={styles.row}>
                        <Icon name="arrow-left" size={iconSize} color={iconColor}/>
                        <Text style={styles.metaText}>{item.twoStationBuy}</Text>
                        <Icon name="cube" size={iconSize} color={iconColor}/>
                    </View>
                </View>
            </View>
        )
    }

    getBottom = item => {
        return (
            <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.text}>Profit: {item.profit} Cr</Text>
            </View>
        )
    }

    _renderItem = (loup) => {
        const {textColor, cardColor} = this.props.theme;
        const {item} = loup;
        return (
            <View style={styles.card}>
                {this.getHeader(item)}
                {this.getContent(item)}
                {this.getContentBuy(item)}
                {this.getBottom(item)}
            </View>
        )
    }

    render() {
        const {viewColor} = this.props.theme;
        return (
            <View style={{backgroundColor: viewColor}}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            //refreshing={isRefreshing}
                            onRefresh={this.onGetLoups.bind(this)}
                        />}
                    data={this.props.loups.loups}
                    // ListEmptyComponent={<ListEmptyComponent onPress={this._onRefresh}/>}
                    //keyExtractor={this._keyExtractor}
                    // ItemSeparatorComponent={() => (<Separator/>)}
                    renderItem={this._renderItem}
                    initialNumToRender={6}
                />
            </View>
        )
    }
}

const mapStateProps = (state) => {
    return {
        state: state.state,
        loups: state.loups,
        theme: state.theme
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getLoups: () => dispatch(fetchLoups())
    })
}

export default connect(mapStateProps, mapDispatchToProps)(App);
