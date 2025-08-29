import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


export default function BotaoPersonalizado({pressCallback, texto = "Botão", cor}){
    const handlePress = () => {
        console.log("FILHO: O botão foi pressionado! Avisando o pai");
        pressCallback("Olá pai, vindo do filho");

    } 

    return(
        <View style={Estilo.container}>
            <TouchableOpacity style={[Estilo.button, {backgroundColor: cor}]} onPress={handlePress}>
                <Text style={Estilo.buttonLabel}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: "#dadada",
        margin: 5,

    },
    button:{
        padding: 20,
       
    }
})