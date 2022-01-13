import Ionicons from 'react-native-vector-icons/AntDesign';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from './History';
import Home from './Homescreen';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Main () {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home';
                        } else if (route.name === 'History') {
                            iconName = focused ? 'clockcircleo' : 'clockcircleo';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'user' : 'user';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="History" component={History} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
    );
}
