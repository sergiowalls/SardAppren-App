import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Perfil',
        tabBarIcon: () =>(<Icon name="user" size={30}/>)
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>SardAppren</Text>
                <Text>Benvingut</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
