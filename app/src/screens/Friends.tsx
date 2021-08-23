import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FriendsHeader as Header, FriendsList } from '../components/friends';
import Screen from '../containers/Screen';
import { useTheme } from 'react-native-paper';


const Friends = () : JSX.Element =>  {
  const theme =  useTheme();

  return (
    <Screen background={theme.colors.primary}>
      <Header title="Friends" />
      <View style={[styles.container]}>
        <FriendsList />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Friends;