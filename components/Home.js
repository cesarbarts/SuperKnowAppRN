import React from "react"
import {View, Text, Button} from "react-native"
import auth from "@react-native-firebase/auth"

export default function HomePage() {

    function sair() {
        auth().signOut()
    }


    return (
        <View style={{paddingTop: 100}}>
            <Text>
                Página Inicial
            </Text>
            <Button title='Sair' onPress={sair}></Button>
        </View>
    )
}