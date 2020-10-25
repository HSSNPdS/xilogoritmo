import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

const logoImg = require('../images/logo.png');
const iebImg = require('../images/ieb.png');
const readImg = require('../images/read.png');
const createImg = require('../images/create.png');
const cactusImg = require('../images/cactus.png');

function Landing(){
  const navigation = useNavigation();

  function handleNavigateToRead(){
    
  }

  function handleNavigateToCreate(){
    navigation.navigate('CreatePage')
  }

  return(
    <View style={styles.container}>
      <View style={styles.logoGroup}>
        <Image style={styles.logo} source={logoImg}/>
        <Text style={styles.slogan1}>Não troco meu cordel por comic,</Text>
        <Text style={styles.slogan2}>não troco meu oxênte pelo ok de ninquém!</Text>
      </View>
      
      <View style={styles.btnGroup}>
        <RectButton style={styles.button}>
        <Image style={styles.landingBtn} source={readImg}/>
          <Text style={styles.landingBtnText}>Ler</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={handleNavigateToCreate}>
          <Image style={styles.landingBtn} source={createImg}/>
          <Text style={styles.landingBtnText}>Criar cordel</Text>
        </RectButton>
      </View>

      <View style={styles.footerGroup}>
        <Image style={styles.cactus} source={cactusImg}/>
        <Image style={styles.ieb} source={iebImg}/>
      </View>
    </View>
  )
}

export default Landing;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',

    backgroundColor:'#e6e6e6'
  },
  logoGroup:{
    flex: 1,
    marginBottom: 10,

    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 30
  },
  slogan1:{
    marginTop: 20,
    fontSize: 15,
    maxWidth: 235,
    textAlign: 'center',
  },
  slogan2:{
    fontSize: 15,
    textAlign: 'center',
  },
  btnGroup:{
    flex: 0.5,
    display: 'flex',
    flexDirection: 'row'
  },
  button:{
    marginHorizontal: 10,
    backgroundColor: '#000',
    borderRadius: 15,
  },
  landingBtn:{
    width: 120,
    height: 120,
    marginBottom: 2,
  },
  landingBtnText:{
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  footerGroup:{
    flex: 0.8,
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  cactus:{
    marginTop: 37,
    width: 200,
    height: 200
  },
  ieb:{
    marginTop: 50,
    width: 150,
    height: 150
  }  
})