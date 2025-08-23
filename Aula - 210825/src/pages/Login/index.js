import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import {AntDesign} from "@expo/vector-icons";

export default function Login() {
    return (
        <View style={Estilo.container}>
            <View style={Estilo.header}>
                <Image 
                    source={require("../../assets/img/logo.jpg")} 
                    style={Estilo.imgLogo}
                />
            </View>
            <Text style={Estilo.txtLogin}>Login</Text>

            <View style={Estilo.body}>
                <Text style={Estilo.label}>Username:</Text>
                <TextInput 
                    style={Estilo.input}
                    placeholder="Enter your Username"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="off"
                />
                <Text style={Estilo.label}>Password:</Text>
                <TextInput 
                    style={Estilo.input}
                    placeholder="***********"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoComplete="off"
                    secureTextEntry={true}
                    autoCorrect={false}
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
                        <AntDesign name="google" size={20} style={Estilo.socialIcon}/>
                    </TouchableOpacity> 

                    <TouchableOpacity style={Estilo.socialButton}>
                        <AntDesign name="facebook-square" size={20} style={Estilo.socialIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={Estilo.socialButton}>
                        <AntDesign name="instagram" size={20} style={Estilo.socialIcon}/>
                    </TouchableOpacity>

                    </View>

                    <View style={Estilo.sendFormContainer}>
                    <TouchableOpacity style={Estilo.sendButton}>
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
        marginBottom: 80,
    },
    txtLogin: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    header: {
        alignItems: 'center',
    },
    body: {
        textAlign: 'left',
        alignItems: 'flex-start',
        width: '80%',     
        marginBottom: 40,                    
    },
    label: {
        fontSize: 14,
        color: '#7A7A78',
        marginBottom: 6,
    },
    input:{
        backgroundColor: '#E9F8FF',
        width: '100%',
        height: 40,
        padding: 10,
        color: '#7A7A78',
        borderColor: "#C2DDEE",
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
    },
    labelForgotContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    labelForgot:{
        color: '#8EBFDD'
    },
    footer:{
        borderTopColor: '#D4E4F1',
        borderTopWidth: 1,

    },
    socialIcon:{
        color: '#51BCF4',
    },
    socialButton:{
        width: '80',
        height: '80',
        backgroundColor: '#B7EFFE',
        padding: 6,
        borderColor: '#A8D1E3',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialButtonsContainer:{
        flexDirection: 'row',
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    sendButton:{
        backgroundColor: '#009AC8',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,   
    },
    sendButtonText:{
        color: '#fff',
        fontWeight: 'bold',
    },
    sendFormContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    }
    }
)