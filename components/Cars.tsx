import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import Car, { ICarProps } from './Car';

const carObjs:Array<ICarProps> = [{
    CarProp : {
    src: require('../assets/images/ModelS.jpeg'),
    Model:  'Model S', 
    SubTitle:'Starting from $69,420'
    }
  }, 
  {CarProp : {
    src : require('../assets/images/Model3.jpeg'),
    Model:  'Model 3', 
    SubTitle:'Starting from $38,420'
  }
  }, {CarProp : {
    src : require('../assets/images/ModelX.jpeg'),
    Model:  'Model X', 
    SubTitle:'Get delivery touchless'
  }}
];

const Cars = () => {
    return (
        <View style={carsStyles.container}>
            <FlatList 
            data={carObjs}
            renderItem={({item}) => <Car CarProp={item.CarProp} />}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator = {false}
            />
        </View>);
};

export default Cars;

const carsStyles = StyleSheet.create({
    container: {
        width:'100%', 
       height:'100%', 
  
      },
});