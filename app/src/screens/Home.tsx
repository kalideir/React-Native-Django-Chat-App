import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderAction } from '../components/shared';
import { HomeHeader as Header, History } from '../components/home';
import Screen from '../containers/Screen';
import { HorizontalPadding } from '../components/shared';
import { useTheme } from 'react-native-paper';


const Home = () : JSX.Element =>  {
  const theme =  useTheme();

  return (
    <Screen background={theme.colors.primary}>
      <Header title="Home" action1={<HeaderAction icon="magnify" action={() => {}} />} />
      <View style={[styles.container]}>
        <HorizontalPadding>
          <History /> 
        </HorizontalPadding>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default Home;