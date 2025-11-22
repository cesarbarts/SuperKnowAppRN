import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  function sair() {
    auth().signOut();
  }

  const navegacao = useNavigation()
  return (
    <View style={estilos.bg}>
      <View style={estilos.imageSpace}>
        <Image style={{width: 300, height: 100}} source={require("../src/superknow_logo.png")}></Image>
      </View>
      <View style={estilos.main}>
        <View>
          <Text style={estilos.labelText}>
            Obrigado por utilizar o SuperKnow, o app para saber tudo sobre seus
            filmes favoritos de super-herói.
          </Text>
          <Text style={estilos.labelText}>
            Este aplicativo foi criado 100% por mim, Cesar Buril, desenvolvedor
            júnior de React Native.
          </Text>
          <Text style={estilos.labelText}>
            Habilidades exploradas: Autenticação com Firebase, consumo de API, navegação, modais.
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navegacao.navigate('Tabs')}>
            <View style={estilos.btn}>
              <Text style={estilos.btnText}>Continuar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={sair}>
            <View style={estilos.btn2}>
              <Text style={estilos.btnText2}>Sair</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#2a1c14',
    justifyContent: 'align-items-center',
    alignItems: "center",
  },
  imageSpace: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    flex: 0.7,
    backgroundColor: '#fff',
    padding: 30,
    width: '95%',
    borderRadius: 20,
    gap: 10,
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: 32,
    marginBottom: 10,
    padding: 30,
    color: 'white',
  },
  labelText: {
    fontSize: 16,
    marginBottom: 20
  },

  btn: {
    backgroundColor: '#2a1c14',
    padding: 10,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  btn2: {
    padding: 10,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText2: {
    color: '#2a1c14',
    fontSize: 16,
  },
});
