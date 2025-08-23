import { Image, StyleSheet, Text, View } from "react-native";
import Copo from '../../assets/img/copo.jpg';

export default function Home(){
    return(
        <View style={Estilo.container}>
            <Text>Home!</Text>
            {/*<Image source={Copo} /> */}
            <Image 
                source={require("../../assets/img/copo.jpg")} 
                style={{width: 300, height: 400}}
            />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})