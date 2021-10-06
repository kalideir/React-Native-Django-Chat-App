import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button, TouchableRipple, useTheme } from 'react-native-paper';
import { Divider, HorizontalPadding, Input } from '../components/shared';
import { Description, Footer } from '../components/typography';
import { height, width } from '../constants';
import Screen from '../containers/Screen';
import { goBack, navigate } from '../navigation/navigation-serivce';
import globalStyles from '../styles/global';
import {Icon} from '../themes';

const Login = () : JSX.Element =>  {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);
  return (
    <Screen background={theme.colors.primary}>
      <HorizontalPadding spacing={25} flex={0}>
        <TouchableRipple style={[styles.header]} onPress={() => goBack()}>
          <Icon name="chevron-left" type="fontawesome" size={25} color={theme.colors.background} />
        </TouchableRipple>
      </HorizontalPadding>
      <View style={styles.top}>
        <HorizontalPadding spacing={15}>
          <Text style={styles.title}>Login</Text>
          <Input label="Email" placeholder="email" />
          <Input label="Password" placeholder="Password" secure={true} />
          <Divider />
          <Button onPress={() => navigate('AuthenticatedNavigation')} style={[styles.button, globalStyles.rcc]}>Save</Button>
          <TouchableRipple style={[styles.footer, globalStyles.rcc]} onPress={() => navigate('Register')}>
            <Description>Create An Account</Description>
          </TouchableRipple>
        </HorizontalPadding>
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
  },
  header: {
    marginTop: height * 0.025,
    width: width * 0.05,
    alignSelf: 'flex-start'
  },
  top: {
    marginTop: height * 0.10,
  },
  title: {
    fontSize: 30,
    marginVertical: height * 0.02,
    color: colors.background,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: colors.background,
    marginTop: height * 0.05,
    height: height * 0.065,
  },
  footer: {
    width: width * 0.40,
    marginTop: height * 0.025,
    alignSelf: 'center'
  }
});

export default Login;