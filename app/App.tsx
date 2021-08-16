import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { navigationRef, isReadyRef } from './src/navigation/RootNavigation';



const App = () => {
  useEffect(() => () => {
    isReadyRef.current = false;
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => { isReadyRef.current = true; }}
    >
      <PaperProvider>
        <StatusBar backgroundColor="#333" barStyle="dark-content" />
        <Navigation />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;