import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    if (email === '' || password === '') {
      return Alert.alert('Erro', 'E-mail e senha precisam ser preenchidos');
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('')
        setPassword('')
        return Alert.alert('Sucesso', 'Saudações ao SuperKnow');
      })
      .catch(error => {
        return Alert.alert('Erro', error.code);
      });
  }

  function register() {
    if (email === '' || password === '') {
      return Alert.alert('Erro', 'E-mail e senha precisam ser preenchidos');
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        login()
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          return Alert.alert('Erro', 'E-mail inválido');
        }
        if (error.code === 'auth/email-already-in-use') {
          return Alert.alert('Erro', 'E-mail já utilizado');
        }
        if (error.code === 'auth/weak-password') {
          return Alert.alert('Erro', 'Senha fraca');
        }
        return Alert.alert('Erro', error.code);
      });
  }

  return (
    <View style={estilos.bg}>
      <Text style={estilos.mainText}>Saudações ao SuperKnow</Text>
      <View style={estilos.main}>
        <Text style={estilos.labelText}>E-mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email"
          style={estilos.input}
        ></TextInput>
        <Text style={estilos.labelText}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={estilos.input}
        ></TextInput>
        <TouchableOpacity onPress={login}>
          <View style={estilos.btn}>
            <Text style={estilos.btnText}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={register}>
          <View style={estilos.btn2}>
            <Text style={estilos.btnText2}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    paddingTop: 100,
    backgroundColor: '#fff',
    padding: 30,
    height: '60%',
    width: '100%',
    borderRadius: 30,
    gap: 10,
  },
  mainText: {
    fontSize: 32,
    marginBottom: 10,
    padding: 30,
    color: 'white',
  },
  labelText: {
    fontSize: 16,
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
