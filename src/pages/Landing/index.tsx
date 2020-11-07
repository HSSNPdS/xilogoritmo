import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const logoImg = require('../../assets/Logo.png');
const iebImg = require('../../assets/Ieb.png');
const readImg = require('../../assets/Read.png');
const cactusImg = require('../../assets/Cactus.png');
const createImg = require('../../assets/Create.png');
const sloganImg = require('../../assets/Slogan.png');

export default function Landing() {

  const { navigate } = useNavigation();

  function handleNavigateToNext(){
    navigate('Obras')
  }

  return(
    <View style={styles.container}>
      <View style={styles.logoGroup}>
        <Image style={styles.ieb} source={iebImg}/>
        <Image style={styles.logo} source={logoImg}/>
        <Image style={styles.slogan} source={sloganImg}/>
      </View> 
      <View style={styles.btnGroup}>
        <RectButton 
          onPress={handleNavigateToNext}
          style={styles.button}>
        <Image style={styles.landingBtn} source={readImg}/>
          <Text style={styles.landingBtnText}>Ler</Text>
        </RectButton>
        <RectButton style={styles.button}>
          <Image style={styles.landingBtn} source={createImg}/>
          <Text style={styles.landingBtnText}>Criar cordel</Text>
        </RectButton>
      </View>
      <View style={styles.footerGroup}>
        <Image style={styles.cactus} source={cactusImg}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:'#F0EC82'
  },
  logoGroup:{
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 350,
    height: 50,
    resizeMode: 'contain'
  },
  slogan:{
    marginTop: '3%',
    width: 350,
    height: 60,
    resizeMode: 'contain'
  },
  btnGroup:{
    flex: 0.5,
    display: 'flex',
    flexDirection: 'row',
  },
  button:{
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  landingBtn:{
    width: 120,
    height: 120,
    marginBottom: 2,
  },
  landingBtnText:{
    fontSize: 18,
    fontWeight: "bold",
    color: '#000',
    textAlign: 'center',
  },
  footerGroup:{
    flex: 0.8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row', 
  },
  cactus:{
    width: 200,
    height: 200,
    marginTop: '10%',
  },
  ieb:{
    marginTop: '5%',
    marginBottom: '5%',
    width: 150,
    height: 150
  }  
});