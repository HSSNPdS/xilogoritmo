import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function ObrasView() {
  const { navigate } = useNavigation();

  function handleNavigateToBack(){
    navigate('Obras')
  }

  function handleNavigateToNext(){
    navigate('Metadados')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lineTop}>
        <RectButton
          onPress={handleNavigateToBack}
          style={styles.buttonNavigation}
        >
          <Feather name="arrow-left" size={50} color="black" />
        </RectButton>
        <RectButton 
          onPress={handleNavigateToNext}
          style={styles.buttonMetadados}>
          <Text style={styles.metadadosTitle}>METADADOS</Text>
        </RectButton>
      </View>
      <View style={styles.boxTitle}>
        <Text style={styles.titlePage}>O Sorteio Obrigatório</Text>
        <View style={styles.line}/>
      </View>
      <View style={styles.info}>
        <ScrollView>
          <Image style={styles.infoImage} source={require('../../assets/Image-Solid.png')} />
          <Text style={styles.infoText}>
          Alèrta rapaziada,{"\n"}
          P'ra pegar no pàu furado!{"\n"}
          Que agora ou tudo è soldado,{"\n"}
          Ou a guerra está pegada:{"\n"}
          O eiercito e a armada Metem-nos em arrodeio;{"\n"}
          E' medonho a bombardeio!{"\n"}
          Eo governo è quem vence!{"\n"}
          Em se livrar ninguem pense; Vai tudo para o sorteio! {"\n"}
          {"\n"}
          Prezidentes Conselheiros, Ministros e Senadôres, Condes, Dezembargadôres, Pilôtos e Marinheiros, De indústria os cavalheiros Hão de rodar como veio!... 
          </Text>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82AEF0',
    alignItems: 'center',
  },
  lineTop: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    paddingRight: "10%",
    justifyContent: "space-between"
  },
  buttonNavigation:{
    backgroundColor: '#fff',
    borderRadius: 100, 
    marginTop:40,
    marginLeft: 10,
    padding:0,
  },
  buttonMetadados: {
    backgroundColor: '#fff',
    marginTop:40,
    alignSelf: "center",
    justifyContent: "center",
    padding: "2%",
    borderRadius: 10 
  },
  metadadosTitle: {
    fontSize: 18
  },
  boxTitle: {
    alignItems: 'center',
    marginTop:'25%',
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  line: {
    backgroundColor: '#000',
    height: '2%',
    width: '80%'
  },
  info: {
    backgroundColor: '#fff',
    width: '80%',
    height: '70%',
    overflow: "hidden",
    marginTop: '2%',
    marginBottom: '20%',
    borderRadius: 8,
    alignItems: 'center',
    padding: '2%'
  },
  infoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  infoText: {
    fontSize: 18,
  }

});