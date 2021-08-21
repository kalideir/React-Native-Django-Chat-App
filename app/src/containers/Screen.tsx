import React from 'react'
import globalStyles from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IScreen {
    background: string,
    children: JSX.Element[] | JSX.Element
}

const Screen = ({background, children} : IScreen) : JSX.Element => {
  return (
    <SafeAreaView style={[globalStyles.flex, {backgroundColor: background}]}>
      {children}
    </SafeAreaView>
  )
};

export default Screen;