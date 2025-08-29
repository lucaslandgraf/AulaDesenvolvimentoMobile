import { FlatList, Text, StyleSheet, View} from "react-native";

const DATA = [{id: 1, nome: "Maçã"}, {id: 2, nome: "Banana"}, {id: 3, nome: "Abacaxi"}, {id: 4, nome: "Laranja"}, {id: 5, nome: "Maçã"}, {id: 6, nome: "Uva"}];

export default function Home2(){
    return(
        <View style={Estilo.container}>
            <Text>Tudo Ok!</Text>
            <FlatList
                /* Possível pergunta de prova - Função FlatList, quais são os 3 parametros*/
                data={DATA}
                renderItem={({item}) => <Text>{item.nome}</Text>}
                keyExtractor={(item) => String(item.id)}

            />
        </View> 
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})