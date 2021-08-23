import React from 'react';
import {View} from 'react-native'
import globalStyles from '../../styles/global';

interface IProps {
    children: JSX.Element[] | JSX.Element,
    direction: string
}

const Centered = ({children, direction} : IProps) : JSX.Element => {
  const style = {
    flex: 1
  }
  return (
    <View style={[style, direction === 'row' ? globalStyles.rcc : globalStyles.ccc]}>
      {children}
    </View>
  )
};

export default Centered