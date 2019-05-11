/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Sound from "react-native-sound";

type Props = {};
export default class App extends Component<Props> {

    constructor(props: P, context: any) {
        super(props, context);
        this.state = {playSeconds: 0, beats: 0, points: 0, backgroundColor: '#F5FCFF', curtsCount: 0, llargsCount: 0};


        this.stopCounting = this.stopCounting.bind(this);
        this.beatIt = this.beatIt.bind(this);
        this.getContainerStyles = this.getContainerStyles.bind(this);
        this.beatItCurts = this.beatItCurts.bind(this);
        this.beatItLlargs = this.beatItLlargs.bind(this);
    }

    componentDidMount(): void {
        const sound = new Sound('sardana1.mp3', Sound.MAIN_BUNDLE, error => {
            if (error)
                console.log(error);
            this.playSound(sound);
        });

    }

    render() {
        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);

        return (
            <View style={this.getContainerStyles()}>
                <Text style={styles.welcome}>SardAppren</Text>
                <Text>Benvingut</Text>
                <Text>{currentTimeString}</Text>
                <Text>{this.state.beats}</Text>
                <Text>{this.state.points}</Text>

                <Button onPress={this.beatItCurts} title='Curts'/>
                <Button onPress={this.beatItLlargs} title='Llargs'/>
                <Text> Curts: {this.state.curtsCount}</Text>
                <Text> Llargs: {this.state.llargsCount}</Text>


            </View>
        );
    }

    playSound(sound) {
        sound.play(this.stopCounting);
        this.secondsInterval = setInterval(() => {
            sound.getCurrentTime((seconds) => {
                this.countBeats(seconds);
                this.setState({playSeconds: seconds})
            })
        }, 100);
    }

    countBeats(seconds) {
        const beats = Math.max(Math.trunc((seconds - 5.219) / (53 / 60)), 0);
        this.setState({beats: beats})
    }

    stopCounting() {
        clearInterval(this.secondsInterval);
    }

    beatIt() {
        let number = this.state.playSeconds - 5.219;
        const nearestMultiple = Math.ceil(number / (53 / 60)) * (53 / 60);

        let difference = Math.abs(number - nearestMultiple);
        if (difference < 0.5)
            this.addPoint();
        else
            this.substractPoint();
    }

    beatItCurts() {
        this.setState({curtsCount: this.state.curtsCount + 1})
        this.setState({llargsCount: 0})
        this.beatIt()
    }

    beatItLlargs() {
        this.setState({llargsCount: this.state.llargsCount + 1})
        this.setState({curtsCount: 0})
        this.beatIt()
    }

    addPoint() {
        this.setState({points: this.state.points + 1, backgroundColor: '#00ff00'});
        setTimeout(() => this.setState({backgroundColor: '#F5FCFF'}), 400);
    }

    substractPoint() {
        this.setState({points: this.state.points - 1, backgroundColor: '#ff0000'});
        setTimeout(() => this.setState({backgroundColor: '#F5FCFF'}), 400);
    }

    getAudioTimeString(playSeconds) {
        const min = parseInt(playSeconds % (60 * 60) / 60);
        const sec = parseInt(playSeconds % 60);
        return (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
    }

    getContainerStyles() {
        return {
            ...{backgroundColor: this.state.backgroundColor}, ...styles.container
        }
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
