import { Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

export default function Ex1Mount(){

    const [valor, setvalor] = useState("");
    
    useEffect(() => {
        console.log("Componente Montado!");
        return () => console.log("Componente Desmontado!")
    }, []); 

    // console.log("Teste"); <- Esse console.log aparece antes do useEffect, pois a API é conectada após a página ser renderizada

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Exemplo 1:  useEffect no mount</Text>
            <TextInput
                value = {valor}
                onChangeText={vl => setvalor(vl)}
                placeholder="Altere o valor"

            />
        </View>
    )
}