import { NavigationContainer } from 'expo-router/build/react-navigation';
import { createNativeStackNavigator } from 'expo-router/build/react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import HomePage from './screens/HomePage';


const Stack = createNativeStackNavigator();

const app = () => {
    return (
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                />

                <Stack.Screen
                    name="home"
                    component={HomePage}
                />
            </Stack.Navigator>
    )
}

export default app