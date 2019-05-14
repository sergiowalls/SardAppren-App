import React, {Component} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class PlayScreen extends Component {
    static navigationOptions = {
        title: 'Play',
        tabBarIcon: () => (<Icon name="game-controller" size={30}/>)
    };

    constructor(props: P, context: any) {
        super(props, context);
        this.state = {
            sardanasList: []
        };

        this.renderItem = this.renderItem.bind(this)
    }

    componentWillMount() {
        let list = [
            {title: 'sardana1'},
            {title: 'sardana2'},
            {title: 'sardana3'},
            {title: 'sardana4'},
            {title: 'sardana5'},
            {title: 'sardana6'}
        ]
        setTimeout(() => {
            this.setState({sardanasList: list})
        }, 2000)
        // fetch('url').then((data)=>{this.setState((sardanasList:data.list))})
    }

    renderItem({item}) {
        const { navigation } = this.props
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15
                }}>
                    <View style={{justifyContent: 'center', flex: 1}}><Text
                        style={styles.item}>{item.title}</Text></View>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'center'}}><Button title="contar"/></View>

                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Button title="repartir" onPress={()=>navigation.navigate('BeatScreen')}/>
                    </View>


                </View>
                <View style={{height:1, backgroundColor:'rgba(0,0,0,0.2)', marginRight:10, marginLeft:10}}/>
            </View>


        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.sardanasList}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `id_${index}`}
                />
            </View>


        );
    }

}
const styles = {
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
}

