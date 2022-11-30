import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {Props} from './InjectInterface';
import InjectHOC from './InjectHOC';

import TabsNavigation from './tabs.navigation';
import DetailScreen from '@screens/Detail/DetailScreen';

enableScreens();
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabsNavigation"
        component={InjectHOC<Props, any>(TabsNavigation, {})}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={InjectHOC<Props, any>(DetailScreen, {})}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
