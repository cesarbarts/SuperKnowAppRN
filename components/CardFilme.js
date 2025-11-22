import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({item, setFilme, filme, setModal}) {

    return(
        <View style={estilos.cardFilme}>
            <Text numberOfLines={1} style={estilos.cardFilmeTitle}>{item.title}</Text>
            <Image style={estilos.imagem} source={{uri: item.cover_url}}></Image>
        </View>
    )

}

const estilos = StyleSheet.create({
    cardFilme: {
        height: 200,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    cardFilmeTitle: {
        fontSize: 20,
        paddingVertical: 10,
        color: "#2a1c14"
    },
    imagem: {
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})