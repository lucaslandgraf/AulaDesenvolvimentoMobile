import { Text, View, StyleSheet } from "react-native";

export default () => (
    <View style={Estilo.container}>
        <Text style={Estilo.txtPrincipal}>Configurações de Perfil</Text>
    </View>
)

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    txtPrincipal: {
        fontSize: 16,
        fontWeight: '600',
    }
})