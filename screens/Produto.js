import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Produto() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto</Text>
      <Text>Detalhes do produto aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
