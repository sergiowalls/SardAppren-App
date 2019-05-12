import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from "./src/screens/HomeScreen";
import BeatScreen from "./src/screens/BeatScreen";
import Profile from "./src/screens/UserProfile/Profile";
import RankingScreen from "./src/screens/RankingScreen";

const MainNavigator = createBottomTabNavigator({
    Profile: {screen: Profile2},
    Home: {screen: HomeScreen},
    Beat: {screen: BeatScreen},
    Ranking: {screen: RankingScreen},
}, {initialRouteName: 'Home'});

const App = createAppContainer(MainNavigator);

export default App;