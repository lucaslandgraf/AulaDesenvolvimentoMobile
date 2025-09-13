import { useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native"


export default function Login(){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin(){
        if(login === "helton" && senha === "123"){
            setMessage("Usuário Logado");
        }else{
            setMessage("Usuário e/ou senha incorretos!");
        }
    }
 
    return(
        <View style={Estilo.container}>
            <Text>Login</Text>
            <TextInput
                placeholder="Digite o Login"
                style={Estilo.inputEstilo}
                onChangeText={(tex) => setLogin(tex)}
            />
            <TextInput
                placeholder="Digite a Senha"
                style={Estilo.inputEstilo}
                onChangeText={(senhaDigitada) => setSenha(senhaDigitada)}
            />
            <TouchableOpacity style={Estilo.buttonEstilo}>
                <Text style={Estilo.txtButton} onPress={handleLogin}>Logar</Text>
                
            </TouchableOpacity>
            <Text style={Estilo.txtMessage}>{message}</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputEstilo:{
        borderWidth: 1,
        padding: 12,
        borderColor: "#dadada",
    },
    buttonEstilo:{
        backgroundColor: "silver",
        padding: 14,
        width: 120,
        marginTop: 20

    },
    txtButton:{
        color: "#fff",
        fontWeight: "600",
        textAlign: 'center',
        fontSize: 18,
    }

})