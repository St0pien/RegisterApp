import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import { colors } from './constants';
import Home from './views/Home';
import Admin from './views/Admin';
import User from './views/Details';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: 'white',
            }}>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Admin" component={Admin} options={{title: 'admin page'}} />
                <Stack.Screen name="User" component={User} options={{title: 'edit page'}} />
            </Stack.Navigator>
            <StatusBar></StatusBar>
        </NavigationContainer>
    );
}
