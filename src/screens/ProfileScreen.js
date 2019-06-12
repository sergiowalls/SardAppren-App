import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Perfil',
        tabBarIcon: () =>(<Icon name="user" size={30}/>)
    };

    render() {
        return (
            <View  >
                <Text style={styles.welcome}>SardAppren</Text>
                <Text>Benvingut</Text>
                <View style={{ flex: 1, alignItems: 'stretch' }}>
                    <View style={{ height: 60, backgroundColor: 'red' }} >
                        <Button  title='    2+3    ' color='red'/>
                    </View>

                        <Button style={{ height: 60, backgroundColor: 'black' }} title='2+3+6'    />

                    <View style={{ height: 60, backgroundColor: 'green' }} />
                    <View style={{ height: 60, backgroundColor: 'blue' }} />
                </View>
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
