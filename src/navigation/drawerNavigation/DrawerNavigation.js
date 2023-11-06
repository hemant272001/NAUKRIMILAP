import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import DrawerContent from './DrawerContent';
import Dashboard from '../../screens/dashboard/Dashboard';



const DrawerNav = createDrawerNavigator();

export default function DrawerNavigation(props) {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <DrawerNav.Navigator
      drawerContent={() => <DrawerContent/>}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'tranparent',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: 'hidden',
          zIndex: 100,
        },
      }}
      initialRouteName="home"
      >
      <DrawerNav.Screen
        name="home"
        component={Dashboard}
        options={{headerShown: false}}
      />
    
         </DrawerNav.Navigator>
  );
}
