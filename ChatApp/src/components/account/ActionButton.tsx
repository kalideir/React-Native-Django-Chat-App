/* eslint-disable @typescript-eslint/no-unsafe-return */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TouchableRipple } from 'react-native-paper';
import { height, width } from '../../constants';
import globalStyles from '../../styles/global';
import { Title } from '../typography';

interface IProps {
  title: string;
  action?: () => void;
}

const ActionButton = ({ title, action }: IProps): JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <TouchableRipple
      onPress={action}
      style={styles.container}
    >
      <View style={[styles.wrap, globalStyles.rcc]}>
        <Title>{title}</Title>
      </View>
    </TouchableRipple>
  );
};

const makeStyles = (colors) => StyleSheet.create({
  container: {
    width: width * 0.60,
    height: height * 0.07,
  },
  wrap: { 
    backgroundColor: colors.background, 
    flex: 1,
    borderRadius: 5
  }
});

export default ActionButton;
