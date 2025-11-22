import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const inputSenha = useRef(null);
  const btnEnviar = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    setLoading(true);
    if (email === '' || password === '') {
      setLoading(false);
      return Alert.alert('Erro', 'E-mail e senha precisam ser preenchidos');
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');

        setLoading(false);
        
      })
      .catch(error => {
        setLoading(false);
        return Alert.alert('Erro', error.code);
      });
  }

  function register() {
    setLoading(true);
    if (email === '' || password === '') {
      setLoading(false);
      return Alert.alert('Erro', 'E-mail e senha precisam ser preenchidos');
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        login();
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
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
  if (!loading) {
    return (
      <View style={estilos.bg}>
        <Image
          style={{ width: 300, height: 100 }}
          source={require('../src/superknow_logo.png')}
        ></Image>
        <Text style={estilos.promo}>
          TUDO sobre seus filmes favoritos de super-herói
        </Text>
        <ScrollView style={estilos.main}>
          <Text style={estilos.labelText}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={estilos.input}
            onSubmitEditing={() => inputSenha.current.focus()}
          ></TextInput>
          <Text style={estilos.labelText}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={estilos.input}
            ref={inputSenha}
            onSubmitEditing={() => login()}
          ></TextInput>
          <TouchableOpacity ref={btnEnviar} onPress={login}>
            <View style={estilos.btn}>
              <Text style={estilos.btnText}>Entrar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={register}>
            <View style={estilos.btn2}>
              <Text style={estilos.btnText2}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
  return (
    <View style={[estilos.bg, estilos.center]}>
      <ActivityIndicator size={30} color={'#edf131'}></ActivityIndicator>
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

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    paddingTop: 100,
    backgroundColor: '#0c0723ff',
    padding: 30,
    flexGrow: 0.8,
    flex: 1,
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
    marginBottom: 10
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
    marginBottom: 10
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
