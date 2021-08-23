import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import {Chat, Search} from '../screens';

const AuthenticatedStack = createStackNavigator(); 

const AuthenticatedNavigation = () : JSX.Element => {
  
  return ( 
    <AuthenticatedStack.Navigator
      mode="modal"
      initialRouteName="BottomNavigator"
      screenOptions={{ headerShown: false }}
    >
      <AuthenticatedStack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <AuthenticatedStack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <AuthenticatedStack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />

    </AuthenticatedStack.Navigator>
  );
};

export default AuthenticatedNavigation;