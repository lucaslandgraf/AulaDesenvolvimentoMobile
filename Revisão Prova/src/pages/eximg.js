import { Button, Image, StyleSheet, View, Text, TextInput } from "react-native";
import React, { Fragment, useState } from "react";

const eu = require("../components/eu.jpg")


export default function eximg() {

    const [pedro, setpedro] = useState();
    return (

        <View>
            <View style={Estilo.vertical}>
                <Button title="botao1" />
                <Button title="botao2" />
                <Button title="botao3" />
                <Image source={eu} style={Estilo.imagem} />
            </View>

            <View style={Estilo.horizontal}>
                <Button title="botao1" />
                <Button title="botao2" />
                <Button title="botao3" />
                <Image source={eu} style={Estilo.imagem}  />
            </View>

            <Text>Campo:</Text>
            <TextInput  style={Estilo.campo} placeholder="DIGITE ALGO:" value={pedro} onChangeText={setpedro} ></TextInput>

            <Text>Você digitou {pedro} legal</Text>

            <Fragment>
                <Text>Filho 1</Text>
                <Text>Filho 2</Text>
                <Button title="Clique Aqui" onPress={() => { }} />
            </Fragment>

        </View>

    )
}

const Estilo = StyleSheet.create({
    container: {

    },
    vertical: {
        flex: 1,
        flexDirection: 'column'
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50,
    },
    campo:{
        backgroundColor: 'gray',
        border: 10,
    }
})