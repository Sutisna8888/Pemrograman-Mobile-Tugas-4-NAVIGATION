import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator'; 
import DrawerNavigator from './DrawerNavigator';
import DetailBali from '../screens/Detail/DetailBali';
import StartScreen from '../screens/StartScreen';
 
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen options={{headerShown: false}} name="StartScreen" component={StartScreen} />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="DetailBali" options={{headerShown: false}} component={DetailBali} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
