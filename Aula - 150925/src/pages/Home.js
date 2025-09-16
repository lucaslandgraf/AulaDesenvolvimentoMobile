import { StyleSheet, View, Text, TouchableOpacity, Button} from "react-native"



export default function Home({navigation}){
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.textoPrincipal}>Bem vindo ao APP!</Text>
            <TouchableOpacity style={Estilo.btnPrincipal} onPress={() => navigation.navigate("Perfil")}>
                <Text style={Estilo.txtDoBotaoPrincipal}>Acessar Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPrincipal:{
        fontSize: 20,
        fontWeight: 600,
    },
    btnPrincipal:{
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    txtDoBotaoPrincipal:{
        fontSize: 12,
    
    }
})