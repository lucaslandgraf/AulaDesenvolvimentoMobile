import { StyleSheet, View, Text, Button } from "react-native";



export default function Profile({navigation}){
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.txtPrincipal}>Perfil</Text>
            <Button title="Voltar para Home" onPress={() => navigation.goBack()}/>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtPrincipal:{
        fontSize: 14,
        fontWeight: 500
    }
})