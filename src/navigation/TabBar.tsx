import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home';
import HeaderComponent from './NavigationHeader';
import Appointments from '../screens/appointments/Appointments';
import Tasks from '../screens/tasks/Tasks';
import Goals from '../screens/goals/Goals';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator    screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#217DC1',
          height: 85,
          alignItems: 'center',
          width: '100%',
          paddingHorizontal:10,
          paddingBottom: 25,
          shadowColor: 'rgba(0, 0, 0, 0.05)',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 6,
          fontFamily: 'Poppins-Regular',
          marginTop: -15
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return focused ? (
                <Image source={require('../../res/images/home.png')} style={{height:22,width:22}} />
            ) : (
                <Image source={require('../../res/images/home.png')} style={{height:22,width:22}} />
            );
          }
          else if (route.name === 'Appointment') {
            return focused ? (
                <Image source={require('../../res/images/appointment.png')} style={{height:22,width:22}} />
            ) : (
                <Image source={require('../../res/images/appointment.png')} style={{height:22,width:22}} />
            );
          } 
          else if (route.name === 'Tasks') {
            return focused ? (
                <Image source={require('../../res/images/tasks.png')} style={{height:22,width:22}} />
            ) : (
                <Image source={require('../../res/images/tasks.png')} style={{height:22,width:22}} />
            );
          } 
          else if (route.name === 'Goals') {
            return focused ? (
                <Image source={require('../../res/images/goals.png')} style={{height:22,width:22}} />
            ) : (
                <Image source={require('../../res/images/goals.png')} style={{height:22,width:22}} />
            );
          } 
        },
        headerShown: false,
      })}  >
        <Tab.Screen  name="Home" component={HomeScreen}  />
        <Tab.Screen  name="Appointment" component={Appointments}  />
        <Tab.Screen  name="Tasks" component={Tasks}  />
        <Tab.Screen  name="Goals" component={Goals}  />

      </Tab.Navigator>
    </NavigationContainer>
  );
}