import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

import HomeScreen from "./src/screens/HomeScreen";
import BeatScreen from "./src/screens/BeatScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RankingScreen from "./src/screens/RankingScreen";

const MainNavigator = createBottomTabNavigator({
    Profile: {screen: ProfileScreen},
    Home: {screen: HomeScreen},

    Ranking: {screen: RankingScreen},
}, {initialRouteName: 'Home'});

const App = createAppContainer(createStackNavigator({ MainNavigator , BeatScreen}, { headerMode: "none" }));

export default App;