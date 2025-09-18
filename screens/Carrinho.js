import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Carrinho({ navigation }) {
  const [quantidade, setQuantidade] = useState(1);
  const precoUnitario = 7000.0;
  const total = precoUnitario * quantidade;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>

      {/* Produto */}
      <View style={styles.itemContainer}>
        <Image
          source={require('../assets/product.jpg')}
          style={styles.image}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>Blazer Casual Feminino</Text>
          <Text style={styles.itemDesc}>Blazer xadrez, fechamento simples</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Tamanho:</Text>
            <Picker
              selectedValue={42}
              style={styles.picker}
              onValueChange={(itemValue) => console.log(itemValue)}
            >
              <Picker.Item label="42" value={42} />
              <Picker.Item label="44" value={44} />
            </Picker>

            <Text style={styles.label}>Qtd:</Text>
            <Picker
              selectedValue={quantidade}
              style={styles.picker}
              onValueChange={(itemValue) => setQuantidade(itemValue)}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <Picker.Item key={n} label={`${n}`} value={n} />
              ))}
            </Picker>
          </View>

          <Text style={styles.delivery}>Entrega até 10 de maio de 20XX</Text>
        </View>
      </View>

      {/* Pagamento */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Detalhes do pedido</Text>

        <View style={styles.rowPayment}>
          <Text>Valor do produto</Text>
          <Text>R$ {precoUnitario.toFixed(2)}</Text>
        </View>

        <View style={styles.rowPayment}>
          <Text>Frete</Text>
          <Text>Grátis</Text>
        </View>

        <View style={styles.rowPayment}>
          <Text style={styles.totalLabel}>Total do pedido</Text>
          <Text style={styles.totalLabel}>R$ {total.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pagamento')}
      >
        <Text style={styles.buttonText}>Prosseguir para pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  itemDesc: {
    color: '#666',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  picker: {
    height: 40,
    width: 80,
    marginRight: 15,
  },
  delivery: {
    marginTop: 10,
    color: '#999',
    fontStyle: 'italic',
  },
  paymentContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  paymentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  rowPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#B4D464',
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
