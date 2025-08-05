import { Text, StyleSheet } from "react-native";

export default function ({somaA = 0, somaB = 0, subA = 0, subB = 0}) {
    function soma(a, b){
        return a + b;
    }

    const subtrai = (x, y) => {
        return x - y;
    }

  return (
    <>
      <Text style={Estilo.texto}>
        O resultado da SOMA de {somaA} + {somaB} é:
        <Text style={Estilo.resultado}> {soma(somaA,somaB)}</Text>
      </Text>
      <Text style={Estilo.texto}>
        O resultado da SUBTRAÇÃO de {subA} - {subB} é:
        <Text style={Estilo.resultado}> {subtrai(subA,subB)}</Text>
      </Text>
    </>
  )
}

const Estilo = StyleSheet.create({
  texto: {
    fontSize: 20,
  },
  resultado: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
