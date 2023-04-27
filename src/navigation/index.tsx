import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import Notifications from '../screens/notifications/Notifications';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}  />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

const RootNavigator: FC<{}> = () => {
  return (
    <>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;
