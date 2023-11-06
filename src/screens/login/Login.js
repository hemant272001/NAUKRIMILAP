import { StyleSheet, Text, View,Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputTextField from '../../components/shared_component/textInputs/InputTextField'
import Button from '../../components/shared_component/buttons/Button'

const Login = (props) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);  
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);


  return (
 <View style={{...styles.container,}}>
     <View style={{...styles.box,}}>
        <InputTextField
        width={'80%'}
        onChangeText={(txt)=>{alert(txt)}}
        /> 
        <InputTextField
        width={'80%'}
        onChangeText={(txt)=>{alert(txt)}}
        /> 
        <Button/>
     </View>
 </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'},
    box:{width:'80%',height:'40%',justifyContent:'center',alignItems:'center',borderRadius:10,borderColor:'gray',borderWidth:2,justifyContent:'space-around'}
})