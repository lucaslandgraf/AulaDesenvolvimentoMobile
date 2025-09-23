import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Tela 1
function Tela1({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Tela 1</Text>
      <Button title="Ir para Tela 2" onPress={() => navigation.navigate("Tela2")} />
    </View>
  );
}

// Tela 2
function Tela2({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Tela 2</Text>
      <Button title="Voltar para Tela 1" onPress={() => navigation.goBack()}/>
      <Button title="Ir para Tela 3" onPress={() => navigation.navigate("Tela3")}/>
    </View>
  );
}

// Tela 3
function Tela3({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Tela 3</Text>
      <Button title="Voltar para Tela 2" onPress={() => navigation.goBack()} />
    </View>
  );
}

// App com stack navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ headerShown: false }} />
        <Stack.Screen name="Tela3" component={Tela3} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
