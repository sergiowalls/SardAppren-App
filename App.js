import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import ProfileScreen from "./src/screens/ProfileScreen";
import BeatScreen from "./src/screens/BeatScreen";
import InfoScreen from "./src/screens/InfoScreen";
import RankingScreen from "./src/screens/RankingScreen";
import PlayScreen from "./src/screens/PlayScreen";

const MainNavigator = createBottomTabNavigator({
    Info: {screen: InfoScreen},
    Profile: {screen: ProfileScreen},
    Play:{screen: PlayScreen},
    Ranking: {screen: RankingScreen},
}, {initialRouteName: 'Profile'});

const App = createAppContainer(createStackNavigator({ MainNavigator , BeatScreen}, { headerMode: "none" }));

export default App;