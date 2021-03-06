import React from 'react';
import {View, Text, ImageBackground, ImageBackgroundProps, StyleSheet, Dimensions, ImageSourcePropType} from 'react-native';
import StyledButton, {ButtonType} from './StyledButton';

export interface ICarProps {
    CarProp: {
        Model:string, 
        SubTitle:string
        src : ImageSourcePropType
    }
}

const Car = (carProps:ICarProps) => {
    const {src, Model, SubTitle} = carProps.CarProp;
    const OrderPressed = () => {
     console.warn("Button pressed");
    }
    
    let primary : ButtonType = "Primary";
    let Secondary : ButtonType = "Secondary";
    return (
        <View style={carStyles.carContainer}>
      <ImageBackground 
      source={src} 
      style={carStyles.image}
      />
    <View style={carStyles.titles}>
      <Text style={carStyles.title}>{Model}</Text>
      <Text style={carStyles.subtitles}>{SubTitle}</Text>
      </View>
      <View style={carStyles.buttonContainer}> 
        <StyledButton  Text="Custom Order" Type={primary} OnPress={() => OrderPressed()}  /> 
        <StyledButton  Text="Existing Inventory" Type={Secondary}  OnPress={() => OrderPressed()} />
    </View>
   </View>
    ); 
};

export default Car;

const carStyles = StyleSheet.create({
    buttonContainer:{
        position:"absolute", 
        bottom:20,
        width:'100%',
    },
    carContainer:{
      width:'100%', 
      height:Dimensions.get('window').height, 
    },
    titles:{
      margin:'20%', 
      width:'100%', 
      
    },
    title:{
      fontSize: 40,
      fontWeight: "500"
    },
    subtitles:{
      fontSize:16,
      color:'#5c5e62'
    },
    image:{
      height:'100%', 
      width:'100%',
      resizeMode:'cover',
      position:'absolute'
    },
  styledButtonContainer:{
    width:'100%', 
    alignItems: 'center',
    justifyContent: 'center',
  }

});