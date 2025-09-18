import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>
      <Button title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />
      <Button title="Ir para Carrinho" onPress={() => navigation.navigate('Carrinho')} />
      <Button title="Ver Produto" onPress={() => navigation.navigate('Produto')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
