import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function AboutPage() {
  return (
    <View style={estilos.bg}>
      <Text style={estilos.mainText}>Sobre mim</Text>
      <View style={estilos.main}></View>
    </View>
  );
}

const estilos = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#1423f0ff',
    justifyContent: 'flex-end',
  },
  main: {
    backgroundColor: '#ffffff00',
    padding: 30,
    flex: 0.9,
    width: '100%',
    borderRadius: 30,
    gap: 10,
    justifyContent: 'space-between',
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
    backgroundColor: '#1423f0ff',
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
    color: '#1423f0ff',
    fontSize: 16,
  },
});
