import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/login/Login';
import DrawerNavigation from '../drawerNavigation/DrawerNavigation';
const MainNavigationStack = (props) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator /* screenOptions={horizontalAnimation} */      headerShown={false}>
         <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
          <Stack.Screen
           name="Dashboard"
           component={DrawerNavigation}
           options={{headerShown: false}}
         />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationStack;

const styles = StyleSheet.create({});
