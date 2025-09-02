import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import ListaCarros from '../components/ListaCarros'
import Pessoas from '../components/Pessoas'


export default function Home(){

    return(
        <SafeAreaView style={Estilo.container}> 
            <Text style={Estilo.labelPrincipal}>
                Página Home
            </Text>
            <ListaCarros />
            <Pessoas />
        </SafeAreaView>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelPrincipal:{
        fontSize: 22
    }
})