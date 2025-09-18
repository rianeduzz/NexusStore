import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EsqueceuSenha({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a Senha</Text>
      <Button title="Voltar para Login" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
