import { StyleSheet, Text, View } from "react-native";

export default function Card({title = "Sem título", children}){
    return(
        <View style={Estilo.card}>
            <Text style={Estilo.cardTitle}>{title}</Text>
            <Text style={Estilo.cardContent}>{children}</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    card: {
        backgroundColor: "#f5f5f5",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#e5e5e5",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    cardTitle:{
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 6
    },
    cardContent: {
        fontSize: 12,
        lineHeight: 20
    }
})