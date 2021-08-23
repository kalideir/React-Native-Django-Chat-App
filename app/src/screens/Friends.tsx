import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderAction } from '../components/shared';
import { FriendsHeader as Header, FriendsList } from '../components/friends';
import Screen from '../containers/Screen';
import { HorizontalPadding } from '../components/shared';
import { useTheme } from 'react-native-paper';
import { width } from '../constants';


const Friends = () : JSX.Element =>  {
  const theme =  useTheme();

  return (
    <Screen background={theme.colors.primary}>
      <Header title="Friends" action1={<HeaderAction icon="magnify" action={() => {}} />} />
      <View style={[styles.container]}>
        <HorizontalPadding spacing={0}>
          <FriendsList />
        </HorizontalPadding>
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