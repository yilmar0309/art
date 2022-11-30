import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home/HomeScreen';
import SavedScreen from '@screens/Saved/SavedScreen';
import InjectHOC from './InjectHOC';
import {Props} from './InjectInterface';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={InjectHOC<Props, any>(HomeScreen, {})}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: any;
          }) => {
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      />
      <Tab.Screen
        name="SavedScreen"
        component={InjectHOC<Props, any>(SavedScreen, {})}
        options={() => ({
          title: 'Saved',
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: any;
          }) => {
            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name="content-save-all"
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
