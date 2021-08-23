import React from 'react'
import {Text} from 'react-native-paper';
import { typography } from '../../themes';

type IStyle = {
  [style : string] : unknown
}

interface IProps {
  children: string | JSX.Element | JSX.Element[],
    style?: IStyle
}


const Title = ({children, style} : IProps) : JSX.Element => {

  return (
    <Text style={[style, typography.title]}>{children}</Text>
  )

}

export default Title;