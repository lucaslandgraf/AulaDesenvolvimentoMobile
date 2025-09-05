import { StyleSheet, View, Text } from "react-native";

export default function Filho({textoDoFilho = "Não informado"}){
    return(
        <View style={Estilo.containerFilho}>
            <Text style={Estilo.textoDoFilho}>{textoDoFilho}</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    containerFilho: {
        backgroundColor: "silver",
    },
    textoDoFilho:{
        fontSize: 16
    }
})