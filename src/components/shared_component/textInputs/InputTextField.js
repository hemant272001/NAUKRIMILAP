import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputTextField = props => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View>
    {props.label&&<View style={styles.label}>
        <Text style={styles.labelText}>{props.label}</Text>
     </View>}
     <View style={{...styles.textInputContainer, borderColor:isFocused?'#673AB7':props.error?'red': '#f5f6fa',width:props.width,}}>
     {props.leftIcon&&<View style={{width: '15%',}}>
            <Icon
              name={props.leftIcon}
              style={{color: '#000', fontSize: 22, marginRight: 10}}
            />
          </View>}
      <TextInput
       style={{width: (props.rightIcon || props.leftIcon)?'70%':'100%'}}
       onChangeText={props.onChangeText}
       value={props.value}
       placeholder={props.placeholder}
       placeholderTextColor={props.placeholderColor}
       maxLength={props.maxLength}
       numberOfLines={props.numberOfLines}
       multiline={props.multiline}
       keyboardType={props.keyboardType}
       onSubmitEditing={props.onSubmitEditing}
       onFocus={() => {
       setIsFocused(true);
       }}
       onBlur={() => setIsFocused(false)}
      />
       {props.rightIcon&&<View style={{width: '15%',}}>
            <Icon
              name={props.rightIcon}
              style={{color: '#000', fontSize: 22, marginRight: 10}}
            />
          </View>}

    </View>
    {props.error&&<View style={styles.error}>
        <Text style={styles.errorText}>{props.error}</Text>
     </View>}
    </View>
   
  );
};

export default InputTextField;

const styles = StyleSheet.create({
label:{
    width:'50%',marginLeft:5,marginBottom:2,
},
labelText:{fontSize:13,color:'#000'},
error:{width:'50%',marginLeft:5,marginBottom:2,},
errorText:{fontSize:13,color:'red'},
textInputContainer:{backgroundColor:'#f5f6fa',borderWidth:2, borderRadius:10,paddingHorizontal:5,height:45,alignItems:'center',flexDirection:'row',},


});

InputTextField.defaultProps={
    placeholder:'Input Here',
    maxLength:50,
    placeholderColor:'#dcdde1',
    onChangeText:()=>{},
    width:'70%',
    keyboardType:'default' ,// default , number-pad  ,decimal-pad , numeric ,email-address , phone-pad , url
    numberOfLines:1,
    multiline:false,
    label:'Label',
    onSubmitEditing:()=>{},
    // error:'error',
    // leftIcon:'alpha-t-circle',
    // rightIcon:'alpha-t-circle'
}