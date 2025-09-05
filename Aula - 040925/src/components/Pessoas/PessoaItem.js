import { View, Text, StyleSheet } from "react-native";


export default PessoaItem = ({pessoa}) => (
    <View style={Estilo.item}>
        <Text style={Estilo.title}>{pessoa?.nome}</Text>
    </View>
)

const Estilo = StyleSheet.create({

})