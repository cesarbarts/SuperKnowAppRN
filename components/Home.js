import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  function sair() {
    auth().signOut();
  }

  const navegacao = useNavigation();
  return (
    <View style={estilos.bg}>
      <View style={estilos.imageSpace}>
        <Image
          style={{ width: 300, height: 100 }}
          source={require('../src/superknow_logo.png')}
        ></Image>
        <Text style={estilos.promo}>
          TUDO sobre seus filmes favoritos de super-herói
        </Text>
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
            Habilidades exploradas: Autenticação com Firebase, consumo de API,
            navegação, modais.
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
    backgroundColor: '#060313',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  main: {
    paddingTop: 100,
    backgroundColor: '#0c0723ff',
    padding: 30,
    height: '70%',
    width: '95%',
    borderRadius: 20,
    gap: 10,
    borderWidth: 0.5,
    borderColor: '#edf13100',
    borderTopColor: '#edf131',
  },
  mainText: {
    fontSize: 32,
    color: 'white',
  },
  labelText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#100a2fff',
    padding: 10,
    borderRadius: 10,
    height: 50,
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 0.5,
    borderTopColor: '#edf131',
  },

  btn: {
    backgroundColor: '#edf131',
    padding: 10,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#060313',
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
    color: '#edf131',
    fontSize: 16,
  },
  promo: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
