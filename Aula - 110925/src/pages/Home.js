import { View, TextInput, Text, StyleSheet, Button} from "react-native";
// Hooks
import {useState} from 'react';

export default function Home(){

        //let nome = "Abacaxi";
        const [nome, setNome] = useState("");
        const [contador, setContator] = useState(0);

        return(
            <View style={Estilo.container}>
                <Text style={Estilo.labelPrincipal}>Página Principal</Text>

                <TextInput 
                    placeholder="Digite o seu nome"
                    style={Estilo.inputPrincipal}
                    onChangeText={(texto) => {

                        console.log("Valor de nome: ", nome);
                        console.log("Valor de texto: ", texto);

                        setNome(texto);

                        console.log("Novo valor de texto: ", texto);
                    }}
                    value={nome}
                />
                <Text style={Estilo.labelSecundaria}>Seja bem vindo {nome}</Text>

                <View style={Estilo.contadorContainer}>
                    <Button
                        title="+"
                        onPress={() => setContator(contador < 10 ? contador + 1 : 10)}
                    />
                    <Text style={Estilo.labelSecundaria}>Você clicou {contador} vezes!</Text>
                    <Button
                        title="-"
                        onPress={() => setContator(contador >  0 ? contador - 1 : 0)}
                    />
                </View>

            </View>
        )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    labelPrincipal:{
        fontSize: 32,
        fontWeight: '700',

    },
    inputPrincipal:{
        borderWidth: 1,
        padding: 8,
        marginTop: 6
    },
    labelSecundaria:{
        fontSize: 26,
        fontWeight: '400',
    },
    contadorContainer:{
        marginTop: 12,
        backgroundColor: "#dadada"
    },
    labelSecundaria:{

    }
})