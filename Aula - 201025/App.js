import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';

// https://reactnative.dev/docs/network

export default function App() {

  const [cars, setCars] = useState([]);
  const [atualizando, setAtualizando] = useState(true);

  useEffect(() =>{
    getCars();
  }, [])

  const getCars = async () => {
    try {
      setAtualizando(true)
      console.log("Iniciando a conexão com a API...");
      const response = await fetch('http://10.136.33.15:3000/getcars') // esse é o ipv4 da máquina q muda para cada um. Digite ipconfig no cmd e copie
      console.log("Conteúdo de response: ", response);

      const json = await response.json();
      console.log("Conteúdo do JSON: ", json);
      setCars(json);
      setAtualizando(false);
    } catch (error){
      console.log("Erro ao realizar a requisição: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Aplicativo de carros!</Text>
      <Button
        title='Realizar consulta na API'
        onPress={() => getCars()}
      />

      {
        atualizando ? (<ActivityIndicator />) : (
          <FlatList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.marca} | {item.modelo}</Text>}
      />   
        )
      }
      
      <StatusBar style="auto" /> 
    </View>
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
