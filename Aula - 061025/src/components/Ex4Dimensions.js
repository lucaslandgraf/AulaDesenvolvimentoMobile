import { Text, View, Dimensions } from "react-native";
import { useState, useEffect } from "react";

export default function Ex4Dimension(){

    const [size, setSize] = useState(Dimensions.get("window"));

    useEffect(() => {
        const sub = Dimensions.addEventListener(({window}) => {
            console.log("Tamanho: ". window);
            setSize(window);
        });

        return () => sub?.remove();
    }, []);

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Largura: {size.width} - Altura: {size.height}</Text>
        </View>
    )
}
