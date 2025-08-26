import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

import Saudacao from '../components/Saudacao';

export default function Home() {
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.titulo}>Pagina inicial</Text>
            <Saudacao nome="Helton Azevedo" />
            <Saudacao nome="Juliana Silva" />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 40
    }
})