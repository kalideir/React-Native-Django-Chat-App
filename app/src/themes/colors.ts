import { DarkTheme, DefaultTheme } from 'react-native-paper';

export const darkTheme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#1a60ed',
    accent: '#eeeff1',
    surface: '#f8f8f8',
    background: '#fff',
    black: '#111',
  },
};

export const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#577df4',
    accent: '#fff',
    surface: '#eeeff1',
    background: '#f8f8f8',
    black: '#111',
  },
};