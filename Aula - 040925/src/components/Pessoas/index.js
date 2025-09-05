import { StyleSheet, View, FlatList,Text } from "react-native";
import PessoaItem from "./PessoaItem";

import xpto from '../../data/pessoas.json';

export default function Pessoas() {
    return(
        <View style={Estilo.container}>
            <FlatList 
                data={xpto}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <PessoaItem pessoa={item} />}
            />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {

    }
})