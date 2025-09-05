import { StyleSheet, View } from "react-native";

export default function Pai({children}){
    return(
        <View style={Estilo.container}>
            {children}
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
        borderWidth: 2,
        borderColor: "#e5e5e5",
        margin: 18
    }
})