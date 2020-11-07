import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function Metadados() {

  const { navigate } = useNavigation();

  function handleNavigateToBack(){
    navigate('ObrasView')
  }

  return (
    <SafeAreaView style={styles.container}>
      <RectButton
        onPress={handleNavigateToBack}
        style={styles.buttonNavigation}
      >
        <Feather name="arrow-left" size={50} color="black" />
      </RectButton>
      <View style={styles.boxTitle}>
        <Text style={styles.titlePage}>METADADOS</Text>
        <View style={styles.line}></View>
      </View>
      <ScrollView>
        <View style={styles.boxContent}>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Título:</Text>
            <Text style={styles.infoData}> O Sorteio Obrigatório</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Descrição:</Text>
            <Text style={styles.infoData}> Possui o texto: "Concluzão [conclusão] do Romance Traição, Vingança e Perdão"</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Autor:</Text>
            <Text style={styles.infoData}> Francisco das Chagas Batista (1882-1930), Leandro Gomes de Barros (1865-1918)</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Tema:</Text>
            <Text style={styles.infoData}>O mesmo destino para todas as pessoas; Traição, vingança e perdão</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Palavras-chave:</Text>
            <Text style={styles.infoData}>Sorteio; sociedade; escape; meio; morte; Czar; Licurco; luta; armas; paz; traição; vingaça</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Núm. de Folhas:</Text>
            <Text style={styles.infoData}>8</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Técnica de Registro:</Text>
            <Text style={styles.infoData}>Impresso Gráfico</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Observações:</Text>
            <Text style={styles.infoData}>Não possui capa nem contracapa. Numeração manuscrita na capa: "5".</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Código de Referência:</Text>
            <Text style={styles.infoData}>MA-LPCORDEL-005</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Unidade de Armazenamento:</Text>
            <Text style={styles.infoData}>CAIXA 011 - Folhetos de Cordel</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Gênero Documental:</Text>
            <Text style={styles.infoData}>Textual</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Espécie Documental/Formato:</Text>
            <Text style={styles.infoData}>Folheto de Cordel</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Suporte:</Text>
            <Text style={styles.infoData}>Papel</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Localidade:</Text>
            <Text style={styles.infoData}>s.l. - (sem local)</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Data:</Text>
            <Text style={styles.infoData}>S/D</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Idioma:</Text>
            <Text style={styles.infoData}>Português</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Cromia:</Text>
            <Text style={styles.infoData}>-</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Notas de pesquisa:</Text>
            <Text style={styles.infoData}>O folheto possui dois textos: A autoria do primeiro texto é atribuída à Leandro Gomes de Barros, e o segundo é atribuído a Francisco das Chagas Batista, inclusive através do acróstico.</Text>
            <View style={styles.lineData}></View>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.titleInfo}>Técnicas de Gravura:</Text>
            <Text style={styles.infoData}>-</Text>
            <View style={styles.lineData}></View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82AEF0',

  },
  buttonNavigation:{
    backgroundColor: '#fff',
    borderRadius: 100, 
    marginTop:40,
    marginLeft: 10,
    padding:0,
    alignItems: "center",
    justifyContent: 'flex-start',
    position: "absolute",
  },
  boxTitle: {
    alignItems: 'center',
    marginTop: '20%'
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "600",
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10

  },
  line: {
    backgroundColor: '#000',
    height: '5%',
    width: '90%'
  },
  boxContent: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    // Aparece todos os cards corretamente
    paddingBottom: '100%',

    marginHorizontal: '10%',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    shadowColor: "#707070",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  infoCard: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    padding: 8,
    // backgroundColor: '#707070'
  },
  titleInfo: {
    marginTop: 0,
    fontSize: 18,
    fontWeight: "700"
  },
  infoData: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "400"
  },
  lineData: {
    marginTop: 15,
    marginBottom: 0,

    backgroundColor: '#000',
    height: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});