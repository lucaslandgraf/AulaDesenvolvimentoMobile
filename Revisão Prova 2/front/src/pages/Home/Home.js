import { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function Home(){

    const [carros, setCarros] = useState([]);

    const api = axios.create({ baseURL: "http://SEUIP:3000" });

    // GET (Read)
    async function carregar(){
        try{
            const res = await api.get("/getcars");
            setCarros(res.data);
        }catch(e){
            alert("Erro ao carregar lista.");
        }
    }

    // POST (Create)
    async function criarCarro(){
        try{
            await api.post("/cars", { nome: "Novo RN", cor: "Roxo", ano: 2025 });
            carregar();
        }catch(e){
            alert("Erro ao criar carro.");
        }
    }

    // PUT (Update)
    async function atualizarCarroPeloUltimo(){
        if (carros.length === 0) {
            alert("Crie um carro primeiro!");
            return;
        }

        const idDoUltimoCarro = carros[carros.length - 1].id;

        try{
            await api.put(`/cars/${idDoUltimoCarro}`, {
                nome: "UPDATED",
                cor: "AZUL",
                ano: 2026
            });

            carregar();
            alert(`Carro ${idDoUltimoCarro} atualizado!`);
        }catch(e){
            alert("Erro ao atualizar.");
        }
    }

    // DELETE (Delete)
    async function deletarCarro(id){
        try{
            await api.delete(`/cars/${id}`);
            carregar();
        }catch(e){
            alert("Erro ao deletar.");
        }
    }

    useEffect(() => { carregar(); }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Carros</Text>

            <View style={styles.actions}>
                <Button title="Criar" onPress={criarCarro} />
                <Button title="Atualizar Último" onPress={atualizarCarroPeloUltimo} />
            </View>

            <FlatList
                data={carros}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>ID {item.id} | {item.nome} - {item.cor}</Text>
                        <Button title="Excluir" onPress={() => deletarCarro(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { marginTop: 50, padding: 15, flex: 1 },
    titulo: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
    actions: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
    item: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    itemText: { fontSize: 16, alignSelf: 'center' }
});
