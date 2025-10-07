import { Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function Ex3Unmount(){

    const [tick, setTick] = useState(0);

    useEffect(() => {
        // Executa um callback a cada 1000 milisegundos e incrementa o valor de Tick
        const id = setInterval(() => setTick(t => t + 1), 1000);
        return () => clearInterval(id);
    }, [])

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Segundos {tick}</Text>
        </View>
    )
}
