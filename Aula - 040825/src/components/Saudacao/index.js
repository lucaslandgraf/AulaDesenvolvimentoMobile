import { Text, StyleSheet } from "react-native";

const Saudacao = ({ nome = "Usuário" }) => (
  <Text style={Formata.textoSaudacao}>Bem vindo {nome}</Text>
);

const Formata = StyleSheet.create({
  textoSaudacao: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Saudacao;
