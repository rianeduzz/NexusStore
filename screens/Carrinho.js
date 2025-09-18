import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Carrinho({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <Button title="Ir para Entrega" onPress={() => navigation.navigate('Entrega')} />
      <Button title="Ir para Pagamento" onPress={() => navigation.navigate('Pagamento')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
