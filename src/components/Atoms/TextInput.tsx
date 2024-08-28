import React from 'react'
import { TextInput as Input , StyleSheet } from 'react-native';

interface TextInputComponentProps{
  value:string;
  onChangeText:(text:string)=>void;
  placeholder?:string;
}

const TextInputComponent:React.FC<TextInputComponentProps> = ({value, onChangeText, placeholder}) => {
  return (
    <Input 
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder} />
  )
}

const styles = StyleSheet.create({
  input:{
    height:40,
    borderColor:'#ccc',
    borderWidth:1,
    paddingHorizontal:10,
    borderRadius:5
  }
})

export default TextInputComponent