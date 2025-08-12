import { StyleSheet, Text, View } from "react-native";


export default () => (
    <View style={Estilo.container}>
            <View style={Estilo.box1}/>
            <View style={Estilo.box2}/>
            <View style={Estilo.box3}/>
    </View>
)

const Estilo = StyleSheet.create({
    container:{ 
        flex: 1, // Ocupa todo o espaço disponível   
        flexDirection: 'column',
        backgroundColor: '#dadada',
    },
    box1:{
        backgroundColor: 'red',
        flex: 1, // Ocupa 1 parte
    },
    box2:{
        backgroundColor: 'green',
        flex: 2, // Ocupa 2 partes
    },
    box3:{
        backgroundColor: 'blue',
        flex: 3, // Ocupa 3 partes
    },
})

// https://icons.expo.fyi/Index <- icones