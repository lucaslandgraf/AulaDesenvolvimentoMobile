import { Text, View, FlatList } from "react-native";

import {algo} from "@nav"

export default function Eximg3() {
  const dados = [
    { marca: "Toyota", modelo: "Corolla", ticketMedio: "123.450,21" },
    { marca: "Volvo", modelo: "XC90", ticketMedio: "245.792,40" },
    { marca: "Porsche", modelo: "Panamera", ticketMedio: "58.920,31" },
    { marca: "BMW", modelo: "X5", ticketMedio: "457.040,13" },
    { marca: "Land Rover", modelo: "Velar", ticketMedio: "12.422,14" },
    { marca: "Jeep", modelo: "Commander", ticketMedio: "675.922,55" },
    { marca: "Dodge", modelo: "RAM Laramie", ticketMedio: "643.764,03" },
  ];

  return (
    <View>
      <Text>Dados</Text>

      <FlatList
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Marca: {item.marca}</Text>
            <Text>Modelo: {item.modelo}</Text>
            <Text>Ticket Médio: {item.ticketMedio}</Text>
          </View>
        )}
      />
    </View>
  );
}
