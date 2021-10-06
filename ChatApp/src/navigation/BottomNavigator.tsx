import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTheme } from 'react-native-paper';
import { height } from '../constants';

import {
  Home,
  Friends,
  Profile
} from '../screens';
import {Icon} from '../themes';

const Tab = createBottomTabNavigator();


const BottomTabs =() : JSX.Element => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          height: height * 0.08,
          backgroundColor: '#FFF',
          paddingBottom: height * 0.08 * 0.1
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              type="ant"
              name="home"
              size={22}
              color={focused ? theme.colors.primary : '#111'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              type="feather"
              name="users"
              size={22}
              color={focused ? theme.colors.primary : '#111'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              type="feather"
              name="user"
              size={22}
              color={focused ? theme.colors.primary : '#111'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;