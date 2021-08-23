import React from 'react';
import {View} from 'react-native'

interface IProps {
    children: JSX.Element[] | JSX.Element,
    spacing?: number | string
}

const HorizontalPadding = ({children, spacing} : IProps) : JSX.Element => {
  const style = {
    flex: 1,
    paddingHorizontal: spacing
  }
  return (
    <View style={[style]}>
      {children}
    </View>
  )
};

export default HorizontalPadding