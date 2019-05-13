import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Perfil',
        tabBarIcon: () => (<Icon name="user" size={30}/>)
    };

    render() {
        return (
            <View>
                <Text>Benvingut</Text>
            </View>
        );
    }

}
