import { useState } from "react";
import { StyleSheet, View, Text, Button} from "react-native";


export default function Home2(){
    const [ligado, setLigado] = useState(false);
    const [cor, setCor] = useState("white");        

    return(
        <View style={[Estilo.container, {backgroundColor: cor}]}>
            <Text>Home2</Text>
            <Text style={Estilo.lblPrincipal}>Status: {ligado ? "Ligado" : "Desligado"}</Text>
            <Button
                title={ligado ? "Desligar" : "Ligar"}
                onPress={() => setLigado(!ligado)}
            />

            <Button title="Vermelho" onPress={() => setCor('red')}/>
            <Button title="Verde" onPress={() => setCor("green")}/>
            <Button title="Azul" onPress={() => setCor("blue")}/>
            <Button title="Branco" onPress={() => setCor("white")}/>

        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    lblPrincipal:{
        fontSize: 26,
        fontWeight: '500'
    }
})