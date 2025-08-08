import { Button, StyleSheet, View } from "react-native";


export default () => (
    <View style={Estilo.container}>
        <Button
            title="Sair"
            color={'green'}
            onPress={()=> console.log("Clicou no botão")}
        />
    </View>
)

const Estilo = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
   
})

