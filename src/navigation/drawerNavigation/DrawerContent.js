import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Image
  } from 'react-native';
  import React, { useState, useEffect, useCallback } from 'react';
  import { DrawerContentScrollView } from '@react-navigation/drawer';

  import {
    DrawerActions,
    useNavigation,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,

  } from '@react-navigation/native';
  // import {store} from '../../../App';

import {useToast} from 'react-native-toast-notifications';
  
  export default function DrawerContent(props) {
  const toast = useToast();
    const navigation = useNavigation();
  
 
  
    return (
      <DrawerContentScrollView
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#000',
          borderTopRightRadius: 35,
          borderBottomRightRadius: 35,
          overflow: 'hidden',
          width: '100%',
          borderColor: '#fff',
          borderWidth: 1,
        }}
        {...props}>
       
         <View style={{backgroundColor:'red'}}>
           <Text>Hemuuu</Text>
        </View>

          </DrawerContentScrollView>
    );
  }
  