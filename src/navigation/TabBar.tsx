import * as React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/Home';
import Appointments from '../screens/appointments/Appointments';
import Tasks from '../screens/tasks/Tasks';
import Goals from '../screens/goals/Goals';
import Home from '../../res/images/home.svg';
import Goal from '../../res/images/goals.svg';
import Task from '../../res/images/tasks.svg';
import Appointment from '../../res/images/appointment.svg';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#217DC1',
          height: 85,
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 10,
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
              <>
              <View style={{
                backgroundColor: '#92C146',
                width: '100%',
                height: 90,
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                top:0
              }}>
               
              </View>
               <Home />
               </>
            ) : (

              <Home />

            );
          }
          else if (route.name === 'Appointment') {
            return focused ? ( <>
              <View style={{
                backgroundColor: '#92C146',
                width: '100%',
                height: 90,
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                top:0
              }}>
              </View>
              <Appointment />
              </>
            ) : (
              <Appointment />
            );
          }
          else if (route.name === 'Tasks') {
            return focused ? (
              <>
              <View style={{
                backgroundColor: '#92C146',
                width: '100%',
                height: 90,
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                top:0
              }}>
                 </View>
              <Task />
              </>
            ) : (
              <Task />
            );
          }
          else if (route.name === 'Goals') {
            return focused ? (
              <>
              <View style={{
                backgroundColor: '#92C146',
                width: '100%',
                height: 90,
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                top:0
              }}>
              </View>
              <Goal />
              </>
            ) : (
              <Goal />
            );
          }
        },
        headerShown: false,
      })}  >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Appointment" component={Appointments} />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Goals" component={Goals} />

      </Tab.Navigator>
    // </NavigationContainer>
  );
}