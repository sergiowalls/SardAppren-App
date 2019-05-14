import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class InfoScreen extends Component {
    static navigationOptions = {
        title: 'Info',
        tabBarIcon: () => (<Icon name="info" size={30}/>)
    };

    render() {
        return (
            <View>
                <Text>Benvingut</Text>
            </View>
        );
    }

}
