import { Text, StyleSheet, View } from "react-native";


export default function xpto(){
    return (
        <>
            <Text style={Estilo.textoPrincipal}>Olá mundo do componente</Text>
            <Text style={Estilo.textoSecundario}>Subtítulo inserido no componente.</Text>
        </>
    )
}

const Estilo = StyleSheet.create({
    textoPrincipal: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'right'
    },
    textoSecundario:{
        fontSize: 18,
        color: '#000',
        fontWeight: '500'
    }
})