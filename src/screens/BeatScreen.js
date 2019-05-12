import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sound from "react-native-sound";

export default class BeatScreen extends Component {
    static navigationOptions = {
        title: 'Beat',
        tabBarIcon: () => (<Icon name="music" size={30}/>)
    };

    constructor(props: P, context: any) {
        super(props, context);
        this.state = {
            playSeconds: 0,
            beats: 0,
            points: 0,
            backgroundColor: '#F5FCFF',
            curtsCount: 0,
            llargsCount: 0
        };

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
                <Text>{currentTimeString}</Text>
                <Text>{this.state.beats}</Text>
                <Text>{this.state.points}</Text>
                <View style={{flexDirection: 'row',
                                justifyContent: 'space-between'
                                }}>
                    <View style={{padding:20}}>
                    <Button style={{flex: 1
                    }} onPress={this.beatItCurts} title='Curts'/>
                    </View>
                    <View style={{padding:20}}><Button style={{flex: 1
                    }} onPress={this.beatItLlargs} title='Llargs'/>
                    </View>
                </View>

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
        }, 50);
    }

    countBeats(seconds) {
        const startSecond = seconds - 5.219;
        let beatsPerSecond = 1.12724;
        const beats = startSecond > 0 ? Math.trunc(startSecond / beatsPerSecond) + 1 : 0;
        this.setState({beats})
    }

    stopCounting() {
        clearInterval(this.secondsInterval);
    }

    beatIt() {
        let beat = this.state.playSeconds - 5.219;
        let beatsPerSecond = 1.12724;
        const nextMultiple = Math.ceil(beat / beatsPerSecond) * beatsPerSecond;
        const previousMultiple = Math.floor(beat / beatsPerSecond) * beatsPerSecond;

        let difference = Math.min(beat - previousMultiple, nextMultiple - beat);
        if (difference < 0.2 / beatsPerSecond)
            this.addPoint();
        else
            this.substractPoint();
    }

    beatItCurts() {
        this.setState({curtsCount: this.state.curtsCount + 1});
        this.setState({llargsCount: 0});
        this.beatIt()
    }

    beatItLlargs() {
        this.setState({llargsCount: this.state.llargsCount + 1});
        this.setState({curtsCount: 0});
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
    }

});
