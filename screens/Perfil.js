import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


export default function Perfil() {
  const [email, setEmail] = useState('aashifa@gmail.com');
  const [senha, setSenha] = useState('********');
  const [endereco, setEndereco] = useState('100 Av. Monsenhor Theodomiro Lobo');
  const [cidade, setCidade] = useState('Caçapava');
  const [estado, setEstado] = useState('São Paulo');
  const [conta, setConta] = useState('204356XXXXXX');
  const [titular, setTitular] = useState('Wesley');
  const [ifsc, setIfsc] = useState('SBIN00428');

  // Estados para expandir/fechar as seções
  const [showEndereco, setShowEndereco] = useState(false);
  const [showBancario, setShowBancario] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      {/* Seta de voltar e título de perfil no topo */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.profileTitle}>Perfil</Text>

      {/* Foto do perfil */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/avatar.png')} // Troque pelo seu avatar
          style={styles.avatar}
        />
      </View>

      {/* Detalhes pessoais */}
      <Text style={styles.sectionTitle}>Detalhes pessoais</Text>
      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text>Senha</Text>
      <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry />

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>Trocar senha</Text>
      </TouchableOpacity>

      {/* Detalhes de endereço (Accordion) */}
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setShowEndereco(!showEndereco)}
      >
        <Text style={styles.sectionTitle}>Detalhes de endereço</Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.accordionArrow}>{showEndereco ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
      {showEndereco && (
        <View>
          {/* Botão Editar Endereço */}
          <TouchableOpacity
            style={styles.editEnderecoButton}
            onPress={() => navigation.navigate('Entrega')}
          >
            <Text style={styles.editEnderecoText}>Editar endereço</Text>
          </TouchableOpacity>
          <Text>Endereço</Text>
          <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />
          <Text>Cidade</Text>
          <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />
          <Text>Estado</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={estado} onValueChange={setEstado}>
              <Picker.Item label="São Paulo" value="São Paulo" />
              <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
              <Picker.Item label="Minas Gerais" value="Minas Gerais" />
              {/* Adicione mais estados */}
            </Picker>
          </View>
        </View>
      )}

      {/* Detalhes bancários (Accordion) */}
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setShowBancario(!showBancario)}
      >
        <Text style={styles.sectionTitle}>Detalhes bancários</Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.accordionArrow}>{showBancario ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
      {showBancario && (
        <View>
          <Text>Número da conta bancária</Text>
          <TextInput style={styles.input} value={conta} onChangeText={setConta} />
          <Text>Nome do titular da conta</Text>
          <TextInput style={styles.input} value={titular} onChangeText={setTitular} />
          <Text>IFSC Code</Text>
          <TextInput style={styles.input} value={ifsc} onChangeText={setIfsc} />
        </View>
      )}

      {/* Botão salvar */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  sectionTitle: {
    fontSize: 15, // diminuído de 18 para 15
    fontWeight: 'normal', // removido o bold
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  linkButton: {
    marginBottom: 20,
  },
  linkText: {
    color: '#B4D464',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#B4D464',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 0,
  },
  accordionArrow: {
    fontSize: 18,
    marginLeft: 10,
  },
  editEnderecoButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#E8F5C8',
    borderRadius: 6,
  },
  editEnderecoText: {
    color: '#7A9D32',
    fontWeight: 'bold',
    fontSize: 13,
  },
  // Título de perfil centralizado no topo
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 10,
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
});
