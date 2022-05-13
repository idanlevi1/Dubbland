import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { SCREENS } from '../utils/enums';
import Home from '../screens/Home';
import GameRoom from '../screens/GameRoom';

export type RootStack = StackNavigationProp<RootStackParam>;

export type RootStackParam = {
    Home: any;
    GameRoom: any;
};

const Stack = createNativeStackNavigator<RootStackParam>();

export type stackScreenOptionsProp = {
    title?: string
}

const stackScreenOptions = () => ({
    headerShown: false,
    // headerMode: 'none',
    // presentation: 'containedTransparentModal',
    // headerShadowVisible: true,
    // header: () => (<Header title={title?.toString()} {...props} />),
})


export const RootNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SCREENS.HOME}>
                <Stack.Screen name={SCREENS.HOME} component={Home} options={(props) => ({ ...stackScreenOptions() })} />
                <Stack.Screen name={SCREENS.GAME_ROOM} component={GameRoom} options={(props) => ({ ...stackScreenOptions() })} />
            </Stack.Navigator >
        </NavigationContainer >
    );
}
export default RootNavigator;

