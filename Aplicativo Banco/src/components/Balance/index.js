import { StyleSheet, Text, View } from "react-native";

export default function Balance({saldo = 0, despesas = 0}){
    return(
        <View style={Estilo.container}>  
             <View style={Estilo.item}>
                <Text style={Estilo.itemTitle}>Saldo</Text>
                <View style={Estilo.content}>
                    <Text style={Estilo.currencySymbol}>R$</Text>
                        <Text style={Estilo.balance}>{saldo}</Text>
                </View>
             </View>

             <View style={Estilo.item}>
                <Text style={Estilo.itemTitle}>Gastos</Text>
                <View style={Estilo.content}>
                    <Text style={Estilo.currencySymbol}>R$</Text>
                    <Text style={Estilo.expenses}>{despesas}</Text>
                </View>
             </View>
        </View>

    )
}

const Estilo = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 16,
        paddingEnd: 16,
        marginStart: 14,
        marginEnd: 14,
        marginTop: -24,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 20,
        color: '#dadada',
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center'

    },
    currencySymbol:{
        color: '#dadada',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71',
    },
    expenses:{
        fontSize: 22,
        color: '#e74c3c',

    }
})