import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Pagamento({ navigation }) {
  const [metodo, setMetodo] = useState('cartao');
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');
  const [showModal, setShowModal] = useState(false);

  function pagar() {
    if (metodo === 'cartao') {
      if (!numero || !nome || !validade || !cvv) {
        Alert.alert('Preencha todos os campos do cartão!');
        return;
      }
    }
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Fecha após 2s
    // Aqui você pode navegar ou limpar campos, se desejar
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>{'<'}</Text>
      </TouchableOpacity>
      

      <View style={styles.content}>
        <Text style={styles.title}>Pagamento</Text>
        <Text style={styles.label}>Selecione o método de pagamento:</Text>
        <View style={styles.methodsRow}>
          <TouchableOpacity
            style={[styles.methodButton, metodo === 'cartao' && styles.methodButtonSelected]}
            onPress={() => setMetodo('cartao')}
          >
            <Text style={metodo === 'cartao' ? styles.methodTextSelected : styles.methodText}>Cartão</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.methodButton, metodo === 'pix' && styles.methodButtonSelected]}
            onPress={() => setMetodo('pix')}
          >
            <Text style={metodo === 'pix' ? styles.methodTextSelected : styles.methodText}>Pix</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.methodButton, metodo === 'boleto' && styles.methodButtonSelected]}
            onPress={() => setMetodo('boleto')}
          >
            <Text style={metodo === 'boleto' ? styles.methodTextSelected : styles.methodText}>Boleto</Text>
          </TouchableOpacity>
        </View>

        {metodo === 'cartao' && (
          <View style={styles.cardForm}>
            <Text style={styles.label}>Número do cartão</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={16}
              value={numero}
              onChangeText={setNumero}
              placeholder="0000 0000 0000 0000"
            />
            <Text style={styles.label}>Nome no cartão</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome completo"
            />
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Validade</Text>
                <TextInput
                  style={styles.input}
                  value={validade}
                  onChangeText={setValidade}
                  placeholder="MM/AA"
                  maxLength={5}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  style={styles.input}
                  value={cvv}
                  onChangeText={setCvv}
                  placeholder="CVV"
                  maxLength={4}
                  secureTextEntry
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        )}

        {metodo === 'pix' && (
          <View style={styles.pixBox}>
            <Text style={styles.label}>Chave Pix:</Text>
            <Text selectable style={styles.pixKey}>pagamento@nexusstore.com</Text>
            <Text style={styles.pixObs}>Copie a chave acima e pague via seu banco.</Text>
          </View>
        )}

        {metodo === 'boleto' && (
          <View style={styles.pixBox}>
            <Text style={styles.label}>Boleto gerado:</Text>
            <Text selectable style={styles.pixKey}>34191.79001 01043.510047 91020.150008 7 89370000002000</Text>
            <Text style={styles.pixObs}>Pague o boleto em qualquer banco ou lotérica.</Text>
          </View>
        )}

        <TouchableOpacity style={styles.payButton} onPress={pagar}>
          <Text style={styles.payButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
      {/* Modal customizado */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setShowModal(false)}>
          <View style={styles.modalBox}>
            <View style={styles.checkCircle}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>
            <Text style={styles.modalText}>Pagamento realizado com sucesso.</Text>
          </View>
        </Pressable>
      </Modal>
      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inicio')}>
          <Icon name="home-outline" size={28} color="#B4D464" />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Perfil')}>
          <Icon name="account-circle-outline" size={28} color="#B4D464" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Carrinho')}>
          <Icon name="cart-outline" size={28} color="#B4D464" />
          <Text style={styles.navText}>Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20, alignSelf: 'center' },
  content: {
    marginTop: 40, 
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  backArrow: {
    fontSize: 28,
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    marginTop: 10,
  },
  methodsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
    gap: 10,
  },
  methodButton: {
    borderWidth: 1,
    borderColor: '#B4D464',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  methodButtonSelected: {
    backgroundColor: '#B4D464',
  },
  methodText: {
    color: '#B4D464',
    fontWeight: 'bold',
  },
  methodTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardForm: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  pixBox: {
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  pixKey: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  pixObs: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#B4D464',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    elevation: 6,
    minWidth: 260,
  },
  checkCircle: {
    backgroundColor: '#B4D464',
    borderRadius: 50,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkIcon: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  navButton: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#B4D464',
    marginTop: 2,
    fontWeight: 'bold',
  },
});
