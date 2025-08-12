import { StyleSheet, Text, View } from "react-native";

import {Feather} from '@expo/vector-icons'

export default () => (
    <View style={Estilo.container}>
        <Feather name="user" size={30} color={'#000'}/>
    </View>
)

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
