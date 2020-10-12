import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AddNameRest from "./AddNameRest";
import AddDetailsRest from "./AddDetailsRest";
import Icons from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivationSuccess from "./ActivationSuccess";
import { StackActions,NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function RestaurantNavigator() {

    return (
        
        <Tabs.Navigator initialRouteName="AddNameRest"  >
            <Tabs.Screen
                name="AddNameRest"
                component={AddNameRest}
                options={{ tabBarVisible: false, }}
                
            />
            <Tabs.Screen 
                    name="AddDetailsRest" 
                    component={AddDetailsRest} 
                    options={{ tabBarVisible: false }} 
            />
            <Tabs.Screen 
                name="ActivationSuccess"
                component={ActivationSuccess}
                options={{tabBarVisible:false}}
            />
        </Tabs.Navigator>
        
    );
}

export default RestaurantNavigator;