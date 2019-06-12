import React from 'react';
import {Text, View} from 'react-native';
import BeatScreen from "./BeatScreen";

export default class BeatTutorialScreen extends BeatScreen {


    constructor(props: P, context: *) {
        super(props, context);
    }

    render() {
        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);

        return (
            <View style={this.getContainerStyles()}>
                <Text style={{fontSize: 20}}>{currentTimeString}</Text>
                <Text style={{fontSize: 20}}>Compassos: {this.state.beats}</Text>
            </View>
        );
    }

    countBeats(seconds) {
        const startSecond = seconds - 5.219;
        let beatsPerSecond = 1.12724;
        const beats = startSecond > 0 ? Math.trunc(startSecond / beatsPerSecond) + 1 : 0;
        if (beats !== this.state.beats)
            this.newBeat();
        this.setState({beats})
    }

    newBeat() {
        this.setState({backgroundColor: '#ffea26'});
        setTimeout(() => this.setState({backgroundColor: '#F5FCFF'}), 400);
    }
}
