import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import {Chat, Search} from '../screens';

const RootStack = createStackNavigator(); 

const RootNavigation = () : JSX.Element => {
  
  return ( 
    <RootStack.Navigator
      mode="modal"
      initialRouteName="BottomNavigator"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />

    </RootStack.Navigator>
  );
};

export default RootNavigation;