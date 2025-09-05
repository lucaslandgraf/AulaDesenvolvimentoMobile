import { View, StyleSheet, Text, ScrollView } from "react-native";
import Card from "./Card";

export default function ExibeCards(){
    return(
        <View style={Estilo.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Card title="Abacaxi">
                    Fruta de cor amarela, bastante cítrica.
                </Card>
                <Card title="Maçã">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Laranja">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Pêra">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Pitaya">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Morango do amor">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Tomate">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Uva">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Melância">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Abacate">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Limão">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Pêssego">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
                <Card title="Figo">
                    Fruta de cor vermelha ou verde, geralmente doce.
                </Card>
            </ScrollView>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1
    }
})