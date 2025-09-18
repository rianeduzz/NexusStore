import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Mens({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#222" />
        </TouchableOpacity>
        <View style={styles.logoBox}>
          <Icon name="cart-outline" size={36} color="#B4D464" />
          <Text style={styles.logoText}>Nexus Store</Text>
        </View>
        <TouchableOpacity style={styles.avatarCircle} onPress={() => navigation.navigate('Perfil')}>
          <Icon name="account" size={28} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Categoria: Mens</Text>
        {/* Conteúdo futuro */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 32,
    paddingBottom: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  backButton: {
    padding: 4,
  },
  logoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#B4D464',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F9E6F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#B4D464' },
});
