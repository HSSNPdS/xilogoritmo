import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const logoImg = require('../images/logo.png');


function Landing(){
  return(
    <View>
      <Image source={logoImg}/>
      <Text style={styles.text}>Não troco meu oxente pelo ok de ninguém!</Text>
      <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity>
    </View>
  )
}

export default Landing;

const styles = StyleSheet.create({
  text:{
    color: 'red',
  }
})