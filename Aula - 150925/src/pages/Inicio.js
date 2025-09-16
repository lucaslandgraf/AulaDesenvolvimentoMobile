import { Button, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); // Instanciar um objeto do tipo Stack Navigator

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <Text style={{fontSize: 18}}>Página Home</Text>
            <Button title="Ir para detalhes" onPress={ () => navigation.navigate('Detalhes')}></Button>
        </View>
    )
}

function DetailsScreen({navigation}){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
            <Text style={{fontSize: 16}}>Tela de Detalhes</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default function Inicio(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Tela Inicial"}}/>
                <Stack.Screen name="Detalhes" component={DetailsScreen} options={{headerBackVisible: false, headerLeft: () => null}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

