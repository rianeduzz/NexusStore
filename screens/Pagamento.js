import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pagamento() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      <Text>Informações de pagamento.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
