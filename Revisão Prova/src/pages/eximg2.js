import { useState } from "react"
import { StyleSheet, TextInput, View, Text} from "react-native"

export default function eximg2() {

    const [nome, setnome] = useState("")
    const [carro, setcarro] = useState("")
    const [idade, setidade] = useState("")
    const [email, setemail] = useState("")
    const [curso, setcurso] = useState("")

    return (
        <View>

            <View>
                <Text>Nome Completo: </Text>
                <TextInput style={Estilo.campo} placeholder="Digite seu nome" value={nome} onChangeText={setnome} />

                <Text>Carro Completo: </Text>
                <TextInput style={Estilo.campo} placeholder="Digite seu carro" value={carro} onChangeText={setcarro} />

                <Text>Idade Completa: </Text>
                <TextInput style={Estilo.campo} placeholder="Digite sua idade" value={idade} onChangeText={setidade} />

                <Text>Email Completo: </Text>
                <TextInput style={Estilo.campo} placeholder="Digite seu email" value={email} onChangeText={setemail} />

                <Text>Curso Completo: </Text>
                <TextInput style={Estilo.campo} placeholder="Digite seu curso" value={curso} onChangeText={setcurso} />
            </View>

            <View>
                <Text>Seu nome é: {nome}</Text>
                <Text>Seu carro é: {carro}</Text>
                <Text>Sua idade é: {idade}</Text>
                <Text>Seu email é:  {email}</Text>
                <Text>Seu curso é: {curso}</Text>
            </View>

        </View>
    )
}

const Estilo = StyleSheet.create({
    campo: {
        backgroundColor: 'gray',
        border: 10,
    }
})