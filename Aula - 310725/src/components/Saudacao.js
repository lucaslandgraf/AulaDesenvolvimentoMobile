import { Text, StyleSheet } from "react-native";


export default function(){
    return(
        <Text style={Estilo.textoSaudacao}>Olá Lucas, seja bem vindo!</Text>
    )
}

const Estilo = StyleSheet.create({
    textoSaudacao:{
        fontSize: 20,
        color: '#90b',
    }
})