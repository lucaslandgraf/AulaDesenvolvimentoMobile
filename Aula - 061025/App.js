import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ex1Mount from '../Aula061025/src/components/Ex1Mount';
import Ex2Deps from '../Aula061025/src/components/Ex2Deps';
import Ex3Unmount from '../Aula061025/src/components/Ex3Unmount'
import Ex4Dimensions from '../Aula061025/src/components/Ex4Dimensions';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Ex1Mount/>*/}
      {/*<Ex2Deps/>*/}
      {/*<Ex3Unmount/>*/}
      <Ex4Dimensions/>
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
