import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import {AntDesign} from '@expo/vector-icons';
import { useState } from 'react';
 
export default function Login({navigation}) {

  const [login, setlogin] = useState('')
  const [senha, setsenha] = useState('')

  const api = axios.create({
    baseURL: 'http://SEUIP:3000'
  })

async function handlelogin(){
    if(!login || !senha){
      console.error("login e/ou senha informados estão errados")
      return;
    }


try{
    const res = await api.post("login", {
        username: login,
        password: senha
    })

    console.log("TOKEN:", res.data.token);

    navigation.navigate("Home", { token: res.data.token });


}catch(error){
    console.error("Erro ao efetuar login", error)
  }
}

  return ( 
    <View>
      <Text style={MeuEstilo.TextoTop}>Bem Vindo</Text>
      <View style={MeuEstilo.Campo}>
        <Text style={{marginRight: 120, fontWeight: 'bold'}}>Email:</Text>
        <TextInput style={MeuEstilo.TextInput} placeholder='Preencha seu Email' keyboardType='email-address' onChangeText={setlogin}/>
        <Text style={{marginRight: 120, fontWeight: 'bold', marginTop: 5}}>Senha:</Text>
        <TextInput style={MeuEstilo.TextInput} placeholder='Sua senha' secureTextEntry={true} onChangeText={setsenha}/>
        <TouchableOpacity>
            <Text style={MeuEstilo.ButtonStyle} onPress={() => handlelogin()}>Enviar</Text>

        </TouchableOpacity>
      </View>
      <View style={MeuEstilo.footer}>
        <View style={MeuEstilo.iconsContainer}>
          <TouchableOpacity>
            <AntDesign name='instagram' size={20}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name='twitter' size={20}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const MeuEstilo = StyleSheet.create({
    TextoTop:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    Campo:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    TextInput:{
        color: '#818181ff',
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        bordercolor: 'black',
    },
    ButtonStyle:{
        color: 'green',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
    },
    footer:{
      marginTop: 10,
    },
    iconsContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 10,
    }
});
