import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Account, Login, Register
} from '../screens';

const AccountStack = createStackNavigator();

const AccountStackComponent = () : JSX.Element => (
  <AccountStack.Navigator
    mode="modal"
    initialRouteName="Account"
    screenOptions={{ headerShown: false }}
  >
    <AccountStack.Screen
      name="Account"
      component={Account}
      options={{ headerShown: false }}
    />
    <AccountStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <AccountStack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />

  </AccountStack.Navigator>
);

export default AccountStackComponent;