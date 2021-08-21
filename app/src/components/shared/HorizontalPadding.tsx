import React from 'react';
import {View} from 'react-native'
import { ScreenSpacing } from '../../themes';

interface IProps {
    children: JSX.Element[] | JSX.Element
}

const HorizontalPadding = ({children} : IProps) : JSX.Element => {
  const style = {
    flex: 1,
    paddingHorizontal: ScreenSpacing
  }
  return (
    <View style={style}>
      {children}
    </View>
  )
};

export default HorizontalPadding