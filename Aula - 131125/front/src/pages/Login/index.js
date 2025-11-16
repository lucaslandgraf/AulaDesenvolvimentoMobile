import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import {AntDesign} from "@expo/vector-icons";
import axios from 'axios';

export default function Login({navigation}) {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const[token, setToken] = useState(null);

    const api = axios.create({
        baseURL: "http://10.136.33.8:5000/"
    })

    async function handleLogin(){
        try{
            if(!login || !senha){
                console.error("Login e/ou senha não informados");
                return;
            }

            const res = await api.post("login", {
                username: login,
                password: senha
            });

            if(res.status !== 200) throw new Error("Falha");

            const data = res.data;

           /* const res = await fetch(`http://10.136.33.8:5000/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username: login, password: senha})
            });
    
            if(!res.ok) throw new Error(await res.text());

            const data = await res.json();*/

            if(data.token){
                setToken(data.token);
                navigation.navigate("Home", {token: data.token});
            }else{
                console.error("Login e/ou senha incorretos!");
            }

        }catch(error){
            console.error("Erro ao realizar POST na API: ", error)
        }
    }

    return (
        <View style={Estilo.container}>
            <View style={Estilo.header}>
                <Image 
                    source={require("../../assets/img/logo.jpg")} 
                    style={Estilo.imgLogo}
                />
                <Text style={Estilo.txtLogin}>Login</Text>
            </View>
            <View style={Estilo.body}>
                <Text style={Estilo.label}>Username:</Text>
                <TextInput 
                    style={Estilo.input}
                    placeholder="Enter your Username"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="off"
                    value={login}
                    onChangeText={setLogin}
                />
                <Text style={Estilo.label}>Password:</Text>
                <TextInput 
                    style={Estilo.input}
                    placeholder="**********"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoComplete="off"
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                />
                <View style={Estilo.labelForgotContainer}>
                    <TouchableOpacity>
                        <Text style={Estilo.labelForgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Estilo.footer}>
                <View style={Estilo.socialButtonsContainer}>
                    <TouchableOpacity style={Estilo.socialButton}>
                        <AntDesign 
                            name="google" 
                            style={Estilo.socialIcon} 
                            size={20}    
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={Estilo.socialButton}>
                        <AntDesign 
                            name="facebook-square" 
                            style={Estilo.socialIcon} 
                            size={20}    
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={Estilo.socialButton}>
                        <AntDesign 
                            name="instagram" 
                            style={Estilo.socialIcon} 
                            size={20}    
                        />
                    </TouchableOpacity>
                </View>
                <View style={Estilo.sendFormContainer}>
                    <TouchableOpacity 
                        style={Estilo.sendButton} 
                        onPress={() => handleLogin()}
                    >
                        <Text style={Estilo.sendButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo: {
        width: 200,
        height: 200,
        marginBottom: 80
    },
    txtLogin: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    header: {
        alignItems: 'center'
    },
    body: {
        textAlign: 'left',
        alignItems: 'flex-start',
        width: '80%',
        marginBottom: 40
    },
    label: {
        fontSize: 14,
        color: "#7A7A78",
        marginBottom: 6
    },
    input: {
        backgroundColor: '#E9F8FF',
        width: '100%',
        height: 40,
        padding: 10,
        color: "#7A7A78",
        borderColor: "#C2DDEE",
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20
    },
    labelForgotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    labelForgot: {
        color: "#8EBFDD"
    },
    footer: {
        borderTopColor: "#D4E4F1",
        borderTopWidth: 1,
        width: "100%"
    },
    socialIcon: {
        color: "#51BCF4"
    },
    socialButton: {
        width: "80",
        height: "80",
        backgroundColor: "#B7E7FE",
        padding: 6,
        borderColor: "#A8D1E3",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialButtonsContainer: {
        flexDirection: "row",
        marginTop: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 30
    },
    sendButton: {
        backgroundColor: "#009AC8",
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    },
    sendButtonText:{
        color: "#fff",
        fontWeight: "bold"
    },
    sendFormContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})