import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import {
  Category, Product, Settings, OtherProfile, EditProfile, NewPassword, NewCategory, Users, ProductCategories, EditCategory, Test
} from '../screens';

const AuthenticatedStack = createStackNavigator();

const AuthenticatedStackComponent = () => (
  <AuthenticatedStack.Navigator
    mode="modal"
    initialRouteName="BottomNavigation" 
    screenOptions={{ headerShown: false }}
  >
    <AuthenticatedStack.Screen
      name="BottomNavigation"
      component={BottomNavigation}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="Test"
      component={Test}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="Category"
      component={Category}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="Users"
      component={Users}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="Product"
      component={Product}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="ProductCategories"
      component={ProductCategories}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="NewCategory"
      component={NewCategory}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="OtherProfile"
      component={OtherProfile}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="NewPassword"
      component={NewPassword}
      options={{ headerShown: false }}
    />
    <AuthenticatedStack.Screen
      name="EditCategory"
      component={EditCategory}
      options={{ headerShown: false }}
    />
  </AuthenticatedStack.Navigator>
);

export default AuthenticatedStackComponent;