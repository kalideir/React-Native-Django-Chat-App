import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Info, ProfileHeader as Header } from '../components/profile';
import { useTheme } from 'react-native-paper';
import Screen from '../containers/Screen';

const Profile = () : JSX.Element =>  {
  const theme =  useTheme();

  return (
    <Screen background={theme.colors.primary}>
      <Header title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container} contentContainerStyle={{backgroundColor: theme.colors.background}}>
        <Info />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;