import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Screen from '../containers/Screen';
import {Chat as ChatComponent, Header}  from '../components/chat';


const Chat = () : JSX.Element =>  {

  const theme = useTheme();
  return (
    <Screen background={theme.colors.primary}>
      <Header title="Chat" subtitle="Contact name" />
      <View style={styles.container}>
        <ChatComponent />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});

export default Chat;