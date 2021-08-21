import React from 'react'
import globalStyles from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IScreen {
    children: JSX.Element[] | JSX.Element
}

const Screen = ({children} : IScreen) : JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      {children}
    </SafeAreaView>
  )
};

export default Screen;