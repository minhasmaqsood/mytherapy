import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabBar';
import DrawerMenu from './DrawerMenu';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerStackScreens: FC<{}> = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType:'front',
      overlayColor: 'transparent',
      drawerBackgroundColor: 'transparent',
      headerShown: false,
      drawerPosition: 'left',
      drawerStyle: {
        backgroundColor: 'transparent',
      }}}
      drawerContent={props => <DrawerMenu {...props} />}  >
      <Drawer.Screen name="Home" component={TabNavigator} />

    </Drawer.Navigator>
  );
};

export default DrawerStackScreens;