import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';

const Header = () => {
    return (
        <View style={headerStyle.container}>
            <Pressable onPress={() => {console.warn('Logo')} } >
            <Image style={headerStyle.logo}  source= {require('../assets/images/logo.png')}/>
            </Pressable>
            <Image style={headerStyle.menu} source= {require('../assets/images/menu.png')}/>
        </View>
    );
};

export default Header;

const headerStyle = StyleSheet.create({

    container:{
        position:'absolute', 
        top:50, 
        zIndex:100,
        flexDirection: 'row', 
        justifyContent:'space-between', 
        width:'100%', 
        paddingLeft:10,
        paddingRight:10,
    },
    logo:{
        height:25, 
        width:100, 
        resizeMode:'contain', 

    },
    menu:{
        height:25, 
        width:25, 
        resizeMode: 'contain'
    }

});