import { StyleSheet, Text, View } from "react-native";

import Saudacao from '../components/Saudacao';
import BotaoPersonalizado from "../components/BotaoPersonalizado";

const receberMensagemDoFilho = (mensagem) => {
    console.log("PAI: Recebi uma mensagem do filho!");
    console.log("A mensagem: ", mensagem);

}

export default function Home() {
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.titulo}>Página Inicial</Text>
            <Saudacao nome="Helton Azevedo" call={receberMensagemDoFilho} />
            <BotaoPersonalizado pressCallback={(mensagem) => console.log(`PAI: ${mensagem}`)} texto="Logar" cor="green"/>
            <BotaoPersonalizado pressCallback={(mensagem) => console.log(`PAI 2: ${mensagem}`)} texto="Comportamento 2" cor="blue"/>
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