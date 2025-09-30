import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Home</Text>
      <Text style={{ marginBottom: 16 }}>Esta é a Home. Abra o menu lateral para acessar outras páginas.</Text>
      <Button title='Ir para configurações' onPress={() => navigation.navigate('Configurações')} />
    </View>
  );
}

function SettingsScreen({navigation}){
  return(
    <View style={{flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 22, marginBottom: 16}}>Essa é a página de configurações.</Text>
    </View>
  )
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Inicio'
        screenOptions={{
          headerTitle: "Sistema XPTO",
          headerTitleAlign: 'center',
          //drawerType: 'front',
          //drawerPosition: "left",
          //drawerStyle:{
            //width: '40%'
          //}
        }}
      >
        <Drawer.Screen 
          name="Inicio" 
          component={HomeScreen} 
          options={{
            drawerLabel: "Página Inicial"
          }}
        />
        <Drawer.Screen name="Configurações" component={SettingsScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
