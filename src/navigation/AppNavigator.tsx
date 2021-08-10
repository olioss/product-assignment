import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AddProductScreen from '../screens/AddProductScreen';
import ListProductsScreen from "../screens/ListProductsScreen";
import UsersScreen from "../screens/UsersScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const AppNavigator: React.FC = () => (
    <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={'Add Product'}
                options={{
                    tabBarLabel: 'Add Product',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                    ),
                }}
                component={AddProductScreen}
            />
            <Tab.Screen
                name={'List Products'}
                options={{
                    tabBarLabel: 'List Products',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-list" color={color} size={26} />
                    ),
                }}
                component={ListProductsScreen}
            />
            <Tab.Screen
                name={'Users'}
                options={{
                    tabBarLabel: 'Users',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
                    ),
                }}
                component={UsersScreen}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
