import { Text, View } from "react-native";


export default function Saudacao({nome = "Não identificado"}){
    return(
        <View>
            <Text>Seja bem-vindo {nome}</Text>
        </View>
    )
}