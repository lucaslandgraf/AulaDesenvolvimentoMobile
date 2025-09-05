import { SafeAreaView, Text, StyleSheet } from "react-native";
import ListaCarros from '../components/ListaCarros';
import Pessoas from "../components/Pessoas";
import ExibeCards from "../components/ExibeCards";

export default function Home(){

    return(
        <SafeAreaView style={Estilo.container}>
            <ExibeCards />

            {/*
            <Text style={Estilo.labelPrincipal}>
                Pagina HOME
            </Text>
            <ListaCarros />
            <Pessoas />
            */}
        </SafeAreaView>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelPrincipal: {
        fontSize: 22
    }
})