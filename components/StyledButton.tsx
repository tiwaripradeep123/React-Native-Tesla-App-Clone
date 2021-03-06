import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export type ButtonType = "Primary" |"Secondary";

export interface IStyledButtonProps {
    Text:string; 
    Type:ButtonType; 
    OnPress:()=>void;
}

const StyledButton = (props:IStyledButtonProps) => {
    let bgcolor = props.Type === "Primary" ? "black" : "white";
    let textColor = props.Type === "Primary" ? "white" : "black";
    return (
      <View style={[buttonstyles.container,{backgroundColor:bgcolor}]}>
          <Pressable style={buttonstyles.button}
           onPress={() => props.OnPress()}
          >
        <Text style={[buttonstyles.text, {color : textColor}]}>{props.Text}</Text>
        </Pressable>
     </View>
    );
};

export default StyledButton;

const buttonstyles = StyleSheet.create({
container:{
    width:'100%', 
    padding:10,
    borderRadius:20, 
    marginBottom:10
}, 
button :{
    height:40, 
    justifyContent:'center', 
    alignItems:'center', 
}, 
text:{
    textTransform:'uppercase', 
    fontSize:12, 
}
});