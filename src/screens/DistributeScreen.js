import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BeatScreen from "./BeatScreen";

export default class DistributeScreen extends BeatScreen {


    constructor(props: P, context: *) {
        super(props, context);
        this.distribute = this.distribute.bind(this);
    }

    render() {
        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);

        if (this.state.fail)
            return (
                <View style={styles.containerSuccess}>
                    <Text style={styles.textStyle}>¡Has fallat!</Text>
                    <Text style={styles.textStyle}>😡</Text>
                </View>);

        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{currentTimeString}</Text>
                    <Text style={styles.textStyle}>Curts</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('2')}>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('3')}>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>Llargs</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>

                    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('2')}>
                            <Text>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('3')}>
                            <Text>3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('4')}>
                            <Text>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('2+2+2+3')}>
                            <Text>2+2+2+3</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('2+2+2')}>
                            <Text>2+2+2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('2+2+3')}>
                            <Text>2+2+3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('2+2')}>
                            <Text>2+2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonView} onPress={() => this.distribute('2+3')}>
                            <Text>2+3</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        );
    }

    distribute(propose) {
        this.setState({fail: true});
        setTimeout(() => this.setState({fail: false}), 800);
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerSuccess: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2097f1',
        width: 100,
        height: 100,
        margin: 10
    },
    textStyle: {
        fontSize: 20,
    },
});
