import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    card: {
        //color: 'rgba(0,0,0,0.87)',
        //boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        borderRadius: 5,
        margin: 5,
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#000',
        shadowOpacity: 1.0,
        backgroundColor: '#ffffff',
        padding: 10,
        shadowRadius: 5,
        marginBottom: 10,
        elevation: 2
        // textColor: '#FE7A35'
    },
    text: {
        fontSize: 16,
        color: '#000'
    },
    metaText: {
        fontSize: 15,
        marginLeft: 5,
        marginRight: 5,
        color: '#232F34'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#5c8086'
    },
    headerLeft: {
        flex: 1,
    },
    headerCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
        //alignSelf: '
    },
    headerRight: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1
    },
    rowLeft: {
      flex: 1
    },
    rowRight: {
        flex: 1
    },
    column: {
        flexDirection: 'column'
    },
    content: {}
});