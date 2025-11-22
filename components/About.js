import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function AboutPage() {
  function sair() {
    auth().signOut();
  }
  return (
    <View style={estilos.bg}>
      <Text style={estilos.mainText}>Sobre mim</Text>
      <View style={estilos.main}>
        <Text style={[estilos.btnText, { fontWeight: 'bold' }]}>
          Seu e-mail
        </Text>
        <Text style={estilos.btnText}>{auth().currentUser.email}</Text>
        <TouchableOpacity onPress={sair}>
          <View style={estilos.btn2}>
            <Text style={estilos.btnText2}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#2a1c14',
    justifyContent: 'flex-end',
  },
  main: {
    backgroundColor: '#ffffff00',
    padding: 30,
    flex: 0.9,
    width: '100%',
    borderRadius: 30,
    gap: 10,
    justifyContent: 'flex-start',
  },
  mainText: {
    fontSize: 32,
    marginBottom: 10,
    paddingHorizontal: 30,

    color: 'white',
  },
  labelText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#e8e8e8ff',
    padding: 10,
    borderRadius: 10,
    height: 50,
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
    backgroundColor: 'white',
  },
  btnText2: {
    color: '#2a1c14',
    fontSize: 16,
  },
});
