import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native-ui-lib';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

import StackNavigation from '@navigation/stack.navigation';

import Toast from '@components/Toast/Toast';
import Loading from '@components/Loading/Loading';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    secondary: 'rgba(255, 45, 85, 0.1)',
  },
};

const MyStatusBar = () => (
  <View style={[styles.statusBar, {backgroundColor: '#17181A'}]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="#17181A"
        barStyle="light-content"
      />
    </SafeAreaView>
  </View>
);

const App = () => {
  return (
    <>
      <MyStatusBar />
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <StackNavigation />
        </NavigationContainer>
        <Toast />
        <Loading />
      </SafeAreaProvider>
    </>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#17181A',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

export default App;
