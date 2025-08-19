import { StyleSheet, View, Text, Image } from "react-native";


export default function Login(){
    return(
        <View style={Estilo.container}>
            <View style={Estilo.logoContainer}>
                <Image
                    source={require("../../assets/img/logo.jpg")}
                    style={Estilo.imglogo}
                />
                 
            </View>
            <Text>Login</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imglogo:{
        width: 200,
        height: 200,
    },
    txtLogin:{
        fontSize: 26,
        fontWeight: 'bold',
    }
})