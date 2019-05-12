import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RankingScreen extends Component {
    static navigationOptions = {
        title: 'Ranking',
        tabBarIcon: () => (<Icon name="music" size={30}/>)
    };

    render() {
        return (
            <View>
                <Text>Benvingut</Text>
            </View>
        );
    }

}
