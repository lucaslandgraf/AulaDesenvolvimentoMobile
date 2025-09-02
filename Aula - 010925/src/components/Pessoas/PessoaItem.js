import { View, Text, StyleSheet } from "react-native";

export default function PessoaItem({ pessoa }) {
    return (
        <View style={Estilo.item}>
            <Text style={Estilo.title}>{pessoa?.nome}</Text>
            <Text>{pessoa?.cidade}</Text>
        </View>
    );
}

const Estilo = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
