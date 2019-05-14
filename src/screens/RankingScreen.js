import React, {Component} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class RankingScreen extends Component {
    static navigationOptions = {
        title: 'Ranking',
        tabBarIcon: () => (<Icon name="bar-graph" size={30}/>)
    };

    constructor(props: P, context: any) {
        super(props, context);
        this.state = {
            agrupations_list: [],
            users_list: []
        };

        this.renderItem = this.renderItem.bind(this);
        this.renderItem2 = this.renderItem2.bind(this)
    }

    componentWillMount() {
        let affiliationsRankingList = [
            {
                name: 'Mare Nostrum',
                points: 5154
            },
            {
                name: 'Violetes del Bosc',
                points: 2254
            },
            {
                name: 'Dansaires del Penedès',
                points: 1234
            }
        ];
        let usersRankingList = [
            {
                name: 'Mario Albo',
                points: 1540
            },
            {
                name: 'Alfredo Domínguez',
                points: 1123
            },
            {
                name: 'Gisela Ruzafa',
                points: 954
            }
        ];
        setTimeout(() => {
            this.setState({agrupations_list: affiliationsRankingList});
            this.setState({users_list: usersRankingList})
        }, 100)
        // fetch('url').then((data)=>{this.setState((sardanasList:data.list))})
    }

    renderItem({item}) {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15
                }}>
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text style={styles.item}>{item.points} {item.name}</Text></View>

                </View>
                <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginRight: 10, marginLeft: 10}}/>
            </View>


        )
    }

    renderItem2({item}) {
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
                        style={styles.item}>{item.points} {item.name}</Text></View>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'center'}}><Button
                        title="Desafiar"/></View>


                </View>
                <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginRight: 10, marginLeft: 10}}/>
            </View>


        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.agrupations_list}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `id_${index}`}
                />
                <FlatList
                    data={this.state.users_list}
                    renderItem={this.renderItem2}
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
        height: 50,
    },
};


