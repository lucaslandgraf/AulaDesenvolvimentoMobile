import { StyleSheet, Text, View } from "react-native"

export default function Pedidos({navigation}){
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.labelPrincipal}>Meus Pedidos</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelPrincipal:{
        fontSize: 22,
        marginBottom: 14
    }
})