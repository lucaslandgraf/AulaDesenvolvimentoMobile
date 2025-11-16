import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Aluguel',
    value: '2500,00',
    date: '10/08/2025',
    type: 0 //despesa
  },
  {
    id: 2,
    label: 'Lanches',
    value: '843,00',
    date: '15/08/2025',
    type: 0
  },
  {
    id: 3,
    label: 'Salário',
    value: '22.000,00',
    date: '15/08/2025',
    type: 1
  },
  {
    id: 4,
    label: 'PLR',
    value: '249.300,00',
    date: '16/08/2025',
    type: 1
  },
  {
    id: 5,
    label: 'Combustível',
    value: '1279,23',
    date: '16/08/2025',
    type: 0
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Alex Nunes" />

      <Balance saldo="2.321,55" gastos="-429,88" />

      <Actions />

      <Text style={styles.title}>Últimos lançamentos</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicators={false}
        renderItem={({item}) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
  title: {
    fontSize: 18,
	  fontWeigth: 'bold',
	  marginLeft: 14,
	  marginTop: 14,
	  marginRight: 14,
    marginBottom: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
