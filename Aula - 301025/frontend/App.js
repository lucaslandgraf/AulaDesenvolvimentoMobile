import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const BASE_URL = "http://localhost:3000/";

export default function App() {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState(null);
  const [segredo, setSegredo] = useState('');

  async function handleLogin(){
    try{
      const res = await fetch(`${BASE_URL}login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({plogin: login, psenha: senha}),
      });
      if(!res.ok) throw new Error(await res.text());
      const data = await res.json();
      console.log("Conteúdo da resposta: ", data);
      setToken(data?.token);
    }catch(error){
      console.error("Erro ao realizar login: ", error);
    }
  }

  async function handleSegredo(){
    if(!token){
      console.warn("Faça o login primeiro")
      return
    }
    
    try{
      const res = await fetch(`${BASE_URL}conteudo-megaseguro`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      });
      if(!res.ok) throw new Error(await res.text());

      const data = await res.json();
      setSegredo(data?.message);
    }catch(error){
      console.error("Falha ao acessar o segredo: ", error);
    }
  }

  function handleLogout(){
    setToken(null);
    setSegredo('');
  }

  return (
    <View style={styles.container}> 
      <TextInput
        placeholder='Login'
        value={login}
        onChangeText={setLogin}
        autoCapitalize='none'
        style={{borderWidth: 1, padding: 8}}
      />

      <TextInput
        placeholder='Senha'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{borderWidth: 1, padding: 8}}
      />

      <Button
        title='Logar (receber Token'
        onPress={handleLogin}
      />

    <Button
      title='Acessar conteúdo seguro'
      onPress={handleSegredo}
    />

    <Button
      title="Logout (destruir token)"
      onPress={handleLogout}
    />

    {token && <Text>Token recebido (...)</Text>}
    {<Text>Segredo: {segredo}</Text>}
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
