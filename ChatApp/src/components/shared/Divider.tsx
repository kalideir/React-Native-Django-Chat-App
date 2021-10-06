import React from 'react';
import {View} from 'react-native'
import { DividerMargin } from '../../themes';

interface IProps {
    spacing?: string | number
}

const Divider = ({spacing} : IProps) : JSX.Element => {
  const style = {
    height: spacing || DividerMargin
  }
  return (
    <View style={[style]} / > 
  )
};

export default Divider;