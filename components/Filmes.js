import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import api from '../src/api';
import Card from './CardFilme';
import Feather from '@react-native-vector-icons/feather';

export default function FilmePage() {
  const [filmes, setFilmes] = useState({});

  const [filmeSelec, setFilmeSelec] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function obterFilmes() {
      const response = await api.get('/movies');
      setFilmes(response.data.data); //a api começa com data também
      console.log(filmes);
    }

    obterFilmes();
  }, []);

  return (
    <View style={estilos.bg}>
      <Text style={estilos.mainText}>Filmes</Text>
      <View style={estilos.filmList}>
        <FlatList
          data={filmes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setModal(true);
                setFilmeSelec(item);
              }}
            >
              <Card
                item={item}
                setFilme={setFilmeSelec}
                filme={filmeSelec}
                setModal={setModal}
              />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <View style={estilos.main}></View>
      <Modal visible={modal} animationType="slide" transparent={true}>
        <View style={estilos.modal}>
          <View style={estilos.modalField}>
            <TouchableOpacity onPress={() => setModal(false)}>
              <View style={estilos.btn}>
                <Text style={estilos.btnText}>Fechar</Text>
              </View>
            </TouchableOpacity>
            <ScrollView style={estilos.rolavel}>
              <Text style={[estilos.mainText, estilos.textBlue]}>
                {filmeSelec.title} ({filmeSelec?.release_date?.substr(0, 4)})
              </Text>
              <Image
                style={estilos.imagem}
                source={{ uri: filmeSelec.cover_url }}
              ></Image>
              <Text style={estilos.sinopse}>{filmeSelec.overview}</Text>
              <View style={estilos.extra}>
                <View style={estilos.extraBtn}>
                  <Feather color={'#fff'} size={20} name="clock"></Feather>
                  <Text style={estilos.extrabtnText}>
                    {filmeSelec.duration} min
                  </Text>
                </View>
                <View style={estilos.extraBtn}>
                  <Feather color={'#fff'} size={20} name="hash"></Feather>
                  <Text style={estilos.extrabtnText}>{filmeSelec.saga}</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#1423f0ff',
    justifyContent: 'flex-start',
  },
  filmList: {
    flex: 1,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  mainText: {
    paddingTop: 70,
    paddingBottom: 30,
    fontSize: 32,
    paddingHorizontal: 30,
    color: 'white',
  },
  textBlue: {
    color: '#1423f0ff',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: -10
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  modalField: {
    flex: 0.8,
    backgroundColor: 'white',
    width: '95%',
    padding: 20,
    borderRadius: 20,
  },
  imagem: {
    flex: 1,
    width: '100%',
    height: '500',
    borderRadius: 10,
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
  rolavel: {
    borderRadius: 10,
    marginTop: 20,
  },
  sinopse: {
    textAlign: 'justify',
    fontSize: 16,
    marginVertical: 20,
  },
  extra: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginBottom: 20,
  },
  extraBtn: {
    backgroundColor: '#000000ff',
    flex: 0.5,
    borderRadius: 10,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  extrabtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
