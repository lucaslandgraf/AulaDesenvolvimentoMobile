import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {AntDesign} from '@expo/vector-icons';

export default function Actions() {
    return(
        <ScrollView style={Estilo.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={Estilo.actioButton}>
                <View style={Estilo.areaButton}>
                    <AntDesign name="addfolder" size={26} color={"#000"} />
                </View>
                <Text style={Estilo.labelButton}>Entradas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.actioButton}>
                <View style={Estilo.areaButton}>
                    <AntDesign name="tagso" size={26} color={"#000"} />
                </View>
                <Text style={Estilo.labelButton}>Compras</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.actioButton}>
                <View style={Estilo.areaButton}>
                    <AntDesign name="creditcard" size={26} color={"#000"} />
                </View>
                <Text style={Estilo.labelButton}>Carteira</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.actioButton}>
                <View style={Estilo.areaButton}>
                    <AntDesign name="barcode" size={26} color={"#000"} />
                </View>
                <Text style={Estilo.labelButton}>Boletos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.actioButton}>
                <View style={Estilo.areaButton}>
                    <AntDesign name="setting" size={26} color={"#000"} />
                </View>
                <Text style={Estilo.labelButton}>Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.actioButton}>
                <View style={Estilo.areaButton}>
                    <AntDesign name="barschart" size={26} color={"#000"} />
                </View>
                <Text style={Estilo.labelButton}>Relatórios</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const Estilo = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },
    actioButton: {
        alignItems: 'center',
        marginRight: 32
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 60/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center'
    }
})