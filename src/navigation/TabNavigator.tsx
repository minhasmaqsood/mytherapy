import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home';
const HomeTab = createBottomTabNavigator();
const HomeNavigator: FC<{}> = () => {
  return (
    <HomeTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      >
      <HomeTab.Screen component={HomeScreen} name="Dashboard" />
    </HomeTab.Navigator>
  );
};
export default HomeNavigator;
