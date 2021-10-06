import React from 'react';
import {View} from 'react-native'

interface IProps {
    children: JSX.Element[] | JSX.Element,
    spacing?: number | string,
    flex?: number
}

const HorizontalPadding = ({children, spacing, flex=1} : IProps) : JSX.Element => {
  const style = {
    flex,
    paddingHorizontal: spacing
  }
  return (
    <View style={[style]}>
      {children}
    </View>
  )
};

export default HorizontalPadding