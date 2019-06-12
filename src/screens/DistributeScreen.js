import React from 'react';
import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import BeatScreen from "./BeatScreen";

export default class DistributeScreen extends BeatScreen {


    constructor(props: P, context: *) {
        super(props, context);
    }

    render() {
        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);

        return (
            <View >

                <View style={styles.container}>
                    <Text style={styles.textStyle} >{currentTimeString}</Text>
                <Text style={styles.textStyle}  >Curts</Text>
                </View>
                    <View style={{ flexDirection: 'row',  justifyContent: 'center'}}>
                    <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItCurts}>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItCurts}>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Text style={styles.textStyle}  >Llargs</Text>
                </View>
                <View   style={{ flexDirection: 'row',  justifyContent: 'center'}} >

                        <View  style={{ flexDirection: 'column', justifyContent: 'space-between'}} >
                            <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItCurts}>
                                <Text>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItLlargs}>
                                <Text>3</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItCurts}>
                                <Text>4</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItLlargs}>
                                <Text>2+2+2+3</Text>
                            </TouchableOpacity>
                        </View>


                    <View  style={{ flexDirection: 'column',  alignItems: 'stretch', justifyContent: 'center'}} >
                        <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItCurts}>
                        <Text>2+2+2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItLlargs}>
                            <Text>2+2+3</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItCurts}>
                            <Text>2+2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = { styles.buttonView}   onPress={this.beatItLlargs}>
                            <Text>2+3</Text>
                        </TouchableOpacity>

                    </View>
            </View>
            </View>


        );
    }

    countBeats(seconds) {
        const startSecond = seconds - 5.219;
        let beatsPerSecond = 1.12724;
        const beats = startSecond > 0 ? Math.trunc(startSecond / beatsPerSecond) + 1 : 0;
        this.setState({beats})
    }

}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent:'center',
    },
    buttonView: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F5FCFF',
        width:100,
        height:100,
        margin:10

    }

    ,
    textStyle: {fontSize: 20,

    },

});
