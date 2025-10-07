import { Button, Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function Ex2Deps(){

    const [count, setcount] = useState(0);
    
    useEffect(() => {
        console.log(`Count mudou para: ${count}`)
    }, [count])

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Valor do contador: {count}</Text>
            <Button
                title="Somar 1"
                onPress={() => setcount(c => c + 1)}
            />
          
        </View>
    )
}