import { StyleSheet, View, FlatList, Text } from "react-native";
import {CARROS} from '../../data/carros';

const DADOS2 = [];

const Item = ({dado = {}}) => (
    <View style={Estilo.items}>
        <Text style={Estilo.title}>{dado?.marca}</Text>
        <Text style={Estilo.detail}>{dado?.modelo}</Text>
    </View>
)

export default function ListaCarros(){
    return(
        <View style={Estilo.container}>
            <FlatList
                data={CARROS}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Item dado={item} />}
                ListEmptyComponent={<Text>Não existem elementos na Lista.</Text>}
                
            />
            
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: "#fff"
    },
    items:{
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12
    },
    title: {
        fontWeight: '600',
        fontSize: 22,
        marginBottom: 8
    },
    detail:{
        fontWeight: '300',
        fontSize: 18,
    }
})
