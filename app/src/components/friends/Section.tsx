/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { height } from '../../constants';
import globalStyles from '../../styles/global';
import { HorizontalPadding } from '../shared';
import { Title } from '../typography';

type IStyle = {
  [style : string] : unknown
}

interface IProps {
  children: string,
  style?: IStyle
}


const Section = ({children, style} : IProps) : JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <HorizontalPadding spacing={10}>
      <View style={[styles.container, globalStyles.rcfs, style]}>
        <Title>{children}</Title>
      </View>
    </HorizontalPadding>
  )
};

const makeStyles = (colors) => StyleSheet.create({
  container: {
    height: height * 0.05,
    width: '100%',
    marginBottom: height * 0.004,
    backgroundColor: colors.placeholder,
    borderBottomColor: colors.disabled,
    borderBottomWidth: 1
  },
})


export default Section;