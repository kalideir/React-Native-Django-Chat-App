import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { ActionButton } from '../components/account';
import { Divider } from '../components/shared';
import { Description } from '../components/typography';
import { height, width } from '../constants';
import Screen from '../containers/Screen';
import { navigate } from '../navigation/navigation-serivce';
import globalStyles from '../styles/global';
import {Icon} from '../themes';

const Account = () : JSX.Element =>  {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <Screen background={theme.colors.primary}>
      <View style={[styles.top, globalStyles.ccc]}>
        <Icon type="fontawesome" name="wechat" size={150} color="white" />
        <Text style={styles.title}>DM Bytes</Text>
        <Description>Whatsapp clone?</Description>
      </View>
      <View style={[styles.container]}>
        <ActionButton title="Login" action={() => navigate('Login')} /> 
        <Divider />
        <ActionButton title="Register" action={() => navigate('Register')} />
      </View>
    </Screen>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width,
    bottom: height * 0.1
  },
  top: {
    alignSelf: 'center',
    marginTop: height * 0.25,
  },
  title: {
    fontSize: 40,
    marginTop: height * 0.005,
    color: colors.background,
    alignSelf: 'center'
  }
});

export default Account;