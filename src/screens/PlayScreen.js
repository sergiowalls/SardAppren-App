import React, {Component} from 'react';
import {Text, View, FlatList, Button, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';

export default class PlayScreen extends Component {
    static navigationOptions = {
        title: 'Jugar',
        tabBarIcon: () => (<Icon name="game-controller" size={30}/>)
    };

    constructor(props: P, context: any) {
        super(props, context);
        this.state = {
            sardanasList: [],
            modalVisible: false
        };

        this.renderItem = this.renderItem.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.setModalInvisible = this.setModalInvisible.bind(this)
    }

    componentWillMount() {
        let list = [
            {title: 'Sardana 1'},
            {title: 'Sardana 2'},
            {title: 'Sardana 3'},
            {title: 'Sardana 4'},
            {title: 'Sardana 5'},
            {title: 'Sardana 6'}
        ];
        setTimeout(() => {
            this.setState({sardanasList: list})
        }, 1500)
        // fetch('url').then((data)=>{this.setState((sardanasList:data.list))})
    }

    renderItem({item}) {
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => {
                    this.setModalVisible()
                }} style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    paddingRight: 15
                }}>
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text style={styles.item}>{item.title}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginRight: 10, marginLeft: 10}}/>
            </View>
        )
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Jugar</Text>
                <FlatList
                    data={this.state.sardanasList}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `id_${index}`}
                />
                <Modal isVisible={this.state.modalVisible} onBackdropPress={() => this.setModalInvisible()}
                       style={{backgroundColor: '#FFF'}}>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Button title="Tutorial comptar" onPress={() => {
                            this.setModalInvisible();
                            navigation.navigate('BeatScreen')
                        }}/>
                    </View>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Button title="Comptar" onPress={() => {
                            this.setModalInvisible();
                            navigation.navigate('BeatScreen')
                        }}/>
                    </View>
                    <View style={{padding: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Button title="Repartir"/>
                    </View>
                </Modal>
            </View>
        );
    }

    setModalVisible() {
        this.setState({modalVisible: true})
    }

    setModalInvisible() {
        this.setState({modalVisible: false})
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
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
};
