import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

// https://reactnative.dev/docs/network

const BASE_URL = "http://10.136.33.7:3000/"
const TOKEN = "Fyb_vmG9-TQP65mgOEHVru34-Oh2GYdwU3YgFci1tQY"

export default function App() {

  const [cars, setCars] = useState([]);
  const [atualizando, setAtualizando] = useState(true);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() =>{
    getCars();
  }, [])

  const getCars = async () => {
    try {
      setAtualizando(true)
      console.log("Iniciando a conexão com a API...");
      const response = await fetch(`${BASE_URL}getcars`) // esse é o ipv4 da máquina q muda para cada um. Digite ipconfig no cmd e copie
      console.log("Conteúdo de response: ", response);

      const json = await response.json();
      console.log("Conteúdo do JSON: ", json);
      setCars(json);
      setAtualizando(false);
    } catch (error){
      console.log("Erro ao realizar a requisição GET: ", error);
    }
  }

  const AUTH_HEADER ={
    "Content-Type": "application/json",
    "Authorization": `Bearer ${TOKEN}`
  }

  async function handleCreate(){
    try{
      if(marca && modelo){
        await createCar({pmarca: marca, pmodelo: modelo})
        setMarca("");
        setModelo("");
        await getCars();
        Alert.alert("Sucesso", "Carro inserido!");
      }
    }catch(error){
      Alert.alert("Erro", "Carro não inserido!");
    }
  }

  //Enviar um carro via POST para a API
  const createCar = async (car) => {
    try{
      const res = await fetch(`${BASE_URL}insertcar`,{
        method: "POST",
        headers: AUTH_HEADER,
        body: JSON.stringify(car)
      });

      if(!res.ok) throw new Error(await res.text());

      const data = await res.json();
      console.log("Data: ", data);
      return true;
    }catch(error){
      console.error("Erro ao realizar a requisição POST: ", error)
      return false
    }
  }

  async function preparaUpdate(id, marca, modelo){
    setEditId(id);
    setMarca(marca)
    setModelo(modelo);
  }

  async function handleSave(){
    if(editId){
      await handleUpdate(editId);
    }else{
      await handleCreate();
    }
  }

  async function handleUpdate(id){
    if(id){
      try{
        await updateCar(id, {pmarca: marca, pmodelo: modelo})
        setMarca("");
        setModelo("");
        await getCars();
      }catch(error){
        Alert.alert("Erro", "Falha ao editar veículo");
        console.error("Erro: ", error);
      }
    }
  }

  // Atualizar um carro via PUT para a API
  const updateCar = async (id, car) => {
    try{
      const res = await fetch(`${BASE_URL}updatecar/${id}`, {
        method: "PUT",
        headers: AUTH_HEADER,
        body: JSON.stringify(car)
      });

      if(!res.ok) throw new Error(await res.text());

      return true;
    }catch(error){
      console.error("Erro ao realizar a requisição PUT: ", error)
      return false;
    }
  }

  async function handleDelete(id){
    if(id){
      try{
        await deleteCar(id);
        await getCars();
        Alert.alert("Sucesso", "Veículo removido com sucesso!");
      }catch(error){
        Alert.alert("Erro", "Erro ao remover veículo");
        console.error("Erro ao remover: ", error);
      }
    }
  }

// Remover um carro via DELETE para a API
const deleteCar = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}deletecar/${id}`, { 
      method: "DELETE",
      headers: AUTH_HEADER
    });
     
    if(!res.ok) throw new Error(await res.text());

    return true;
  } catch(error) {
    console.error("Erro ao realizar a requisição DELETE: ", error);
    return false;
  }
}
  return (
    <View style={styles.container}>
      <Text>Aplicativo de carros!</Text>
      <Button
        title='Realizar consulta na API'
        onPress={() => getCars()}
      />

      
  {atualizando ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={cars}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <Text>{item.marca} | {item.modelo}</Text>
          <Button 
            title='Editar' 
            onPress={() => preparaUpdate(item.id, item.marca, item.modelo)} 
          />
          <Button 
            title='Remover' 
            onPress={() => handleDelete(item.id)} 
          />
        </View>
      )}
    />
  )}

      <View>
        <TextInput
          placeholder='Marca do veículo'
          style={{borderWidth: 1, padding: 8, borderRadius: 6}}
          value={marca}
          onChangeText={setMarca}
        />
        <TextInput
          placeholder='Modelo do veículo'
          style={{borderWidth: 1, padding: 8, borderRadius: 6}}
          value={modelo}
          onChangeText={setModelo}
        />
        <Button
          title='Salvar Carro'
          onPress={handleSave}
        />
      </View>
      
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
