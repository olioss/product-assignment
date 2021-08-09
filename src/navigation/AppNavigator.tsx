import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AddProductScreen from '../screens/AddProductScreen';

const AppNavigator: React.FC = () => (
    <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
);

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={'AddProduct'}
                options={{
                    tabBarLabel: 'Add Product',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                    ),
                }}
                component={AddProductScreen}
            />
            <Tab.Screen
                name={'ListProduct'}
                options={{
                    tabBarLabel: 'List Product',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-list" color={color} size={26} />
                    ),
                }}
                component={AddProductScreen}
            />
            <Tab.Screen
                name={'Users'}
                options={{
                    tabBarLabel: 'Users',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
                    ),
                }}
                component={AddProductScreen}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
