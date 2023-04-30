import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import Notifications from '../screens/notifications/Notifications';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bluetooth from '../screens/bluetooth/Bluetooth';
import Scan from '../screens/bluetooth/Scan';
import BluetoothDevices from '../screens/bluetooth/BluetoothDevices';
import PhysicalActivities from '../screens/physicalActivities/PhysicalActivities';
const Stack = createNativeStackNavigator();
const BluetoothStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bluetooth" component={Bluetooth}  />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="BluetoothDevices" component={BluetoothDevices} />

    </Stack.Navigator>
  );
};
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerNavigator" component={PhysicalActivities}  />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="BluetoothStack" component={BluetoothStack} />

    </Stack.Navigator>
  );
};

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
