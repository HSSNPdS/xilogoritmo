import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function Obras() {

  const { navigate } = useNavigation();

  function handleNavigateToNext(){
    navigate('ObrasView')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxTitle}>
        <Image style={styles.titlePage} source={require('../../assets/Obras.png')} />
      </View>
      <RectButton 
        onPress={handleNavigateToNext}
        style={styles.info}>
        <Text style={styles.infoText}>O Sorteio Obrigatório</Text>
      </RectButton>
      <RectButton 
        onPress={handleNavigateToNext}
        style={styles.info}>
        <Text style={styles.infoText}>O Marco de Lampeão</Text>
      </RectButton>
      <RectButton 
        onPress={handleNavigateToNext}
        style={styles.info}>
        <Text style={styles.infoText}>A Sêca no Ceará</Text>
      </RectButton>
      <RectButton 
        onPress={handleNavigateToNext}
        style={styles.info}>
        <Text style={styles.infoText}>História do Valente Sertanejo Zé Garcia</Text>
      </RectButton>
      <RectButton 
        onPress={handleNavigateToNext}
        style={styles.info}>
        <Text style={styles.infoText}>A Minha Infância</Text>
      </RectButton>
      <Image style={styles.footerImage} source={require('../../assets/Image-2.png')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F082DF',
    alignItems: 'center',
  },
  boxTitle: {
    alignItems: 'center',
    marginTop:'15%',
    marginBottom: '5%',
    backgroundColor: '#F082DF'
  },
  titlePage: {
    width: 300,
    height: 80,
    resizeMode: 'contain'
  },
  info: {
    backgroundColor: '#fff',
    width: '80%',
    height: '8%',
    marginTop: '6%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain'
  }
});