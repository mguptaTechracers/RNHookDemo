import HomeScreen from './component/HomeScreen/index';
import DetailScreen from './component/DetailScreen/index';
import LoginScreen from './component/LoginScreen/index';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
    {
        home: HomeScreen,
        login: LoginScreen,
        detail: DetailScreen,

    },
    {
        initialRouteName: 'home',
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);
