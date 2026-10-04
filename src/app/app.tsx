import { NavigationContainer } from 'expo-router/build/react-navigation';
import { createNativeStackNavigator } from 'expo-router/build/react-navigation/native-stack';

import type { AppStackParamList } from '../navigation/types';
import SplashScreen from './screens/SplashScreen';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';


const Stack = createNativeStackNavigator<AppStackParamList>();

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

            <Stack.Screen
                name="ProductDetails"
                component={ProductPage}
            />
        </Stack.Navigator>
    )
}

export default app