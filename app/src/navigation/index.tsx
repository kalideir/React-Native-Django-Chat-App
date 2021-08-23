import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticatedNavigation from './AuthenticatedNavigation';

const RootStack = createStackNavigator(); 

const RootNavigation = () : JSX.Element => {
  
  return ( 
    <RootStack.Navigator
      mode="modal"
      initialRouteName="AuthenticatedNavigation"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen
        name="AuthenticatedNavigation"
        component={AuthenticatedNavigation}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;