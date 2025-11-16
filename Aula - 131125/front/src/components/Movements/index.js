import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {useState} from 'react';

export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);

    return(
        <TouchableOpacity style={Estilo.container} onPress={()=>setShowValue(!showValue)}>
            <Text style={Estilo.date}>{data.date}</Text>
            <View style={Estilo.content}>
                <Text style={Estilo.label}>{data.label}</Text>
                {showValue ? (
                    <Text style={data.type === 1 ? Estilo.value : Estilo.expenses}>
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                ) : (<View style={Estilo.skeleton}></View>)}
            </View>
        </TouchableOpacity>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dadada"
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date: {
        color: '#dadada'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: "#2ecc71",
        fontWeight: 'bold'
    },
    expenses:{
        fontSize: 16,
        color: "#e74c3c",
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#dadada",
        borderRadius: 8
    }
})