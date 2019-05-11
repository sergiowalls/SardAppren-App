import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from "./src/screens/HomeScreen";
import BeatComponent from "./src/screens/BeatComponent";

const MainNavigator = createBottomTabNavigator({
    Home: {screen: HomeScreen},
    Beat: {screen: BeatComponent},
});

const App = createAppContainer(MainNavigator);

export default App;