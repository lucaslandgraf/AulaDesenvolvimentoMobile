import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {Feather} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}) {
    return (
        <View style={Estilo.container}>
            <View style={Estilo.content}>
                <Text style={Estilo.username}>{name}</Text>
                <TouchableOpacity activeOpacity={0.9} style={Estilo.buttonUser}>
                    <Feather name="user" size={27} color={"#fff"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2
    }
})