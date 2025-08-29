import { Text, View } from "react-native";


export default function Saudacao({nome = "Não identificado", call}){
    call("Valor vindo do filho!");
    return(
        <View>
            <Text>Seja Bem-Vindo - {nome}</Text>
        </View>
    )
}