import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation';
import { navigationRef} from './src/navigation/navigation-serivce';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CombinedDarkTheme, CombinedDefaultTheme, PreferencesContext } from './src/themes';


export default function App() : JSX.Element  {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    console.log('works?')
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <SafeAreaProvider>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={theme}>
          <NavigationContainer
            theme={theme}
            ref={navigationRef}
          >
            <StatusBar backgroundColor="red" translucent barStyle="dark-content" />
            <Navigation />
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </SafeAreaProvider>
  );
}

