import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RankingScreen extends Component {
    static navigationOptions = {
        title: 'ranking',
        tabBarIcon: () => (<Icon name="bar-graph" size={30}/>)
    };

    render() {
        return (
            <View> </View>
        );
    }

}
