import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Inicio({ navigation }) {
  // Mock de produtos
  const produtos = [
    {
      id: 1,
      nome: 'Women Printed Kurta',
      descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
      preco: 'R$ 1500',
      desconto: '40%OFF',
      estrelas: 4.5,
      avaliacoes: 56890,
      imagem: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      nome: 'HRX by Hrithik Roshan',
      descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
      preco: 'R$ 2499',
      desconto: '50%OFF',
      estrelas: 4.5,
      avaliacoes: 344567,
      imagem: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      nome: 'Black Winter...',
      descricao: 'Autumn And Winter Casual cotton-padded jacket...',
      preco: 'R$ 899',
      desconto: '30%OFF',
      estrelas: 4.0,
      avaliacoes: 12345,
      imagem: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      nome: 'Mens Starry',
      descricao: 'Mens casual shirt',
      preco: 'R$ 499',
      desconto: '20%OFF',
      estrelas: 4.2,
      avaliacoes: 9876,
      imagem: 'https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      {/* Topo: Logo + Avatar */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Icon name="cart-outline" size={48} color="#B4D464" style={{ marginBottom: -8 }} />
          <Text style={styles.logoText}>Nexus Store</Text>
        </View>
        <TouchableOpacity style={styles.avatarCircle} onPress={() => navigation.navigate('Perfil')}>
          {/* Pode usar uma imagem ou ícone de avatar */}
          <Icon name="account" size={32} color="#222" />
        </TouchableOpacity>
      </View>
      {/* Barra de busca */}
      <View style={styles.searchBox}>
        <Icon name="magnify" size={22} color="#bbb" style={{ marginLeft: 10 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Procurar algum produto"
          placeholderTextColor="#bbb"
        />
        <TouchableOpacity>
          <Icon name="microphone" size={22} color="#bbb" style={{ marginRight: 10 }} />
        </TouchableOpacity>
      </View>
      {/* Categorias */}
      <Text style={styles.categoriasTitle}>Produtos em destaque</Text>
      <View style={styles.categoriasRow}>
        <TouchableOpacity style={styles.categoriaCircle} onPress={() => navigation.navigate('Beleza')}>
          {/* Imagem futura */}
          <Text style={styles.categoriaText}>Beleza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoriaCircle} onPress={() => navigation.navigate('Fashion')}>
          <Text style={styles.categoriaText}>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoriaCircle} onPress={() => navigation.navigate('Moda')}>
          <Text style={styles.categoriaText}>Moda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoriaCircle} onPress={() => navigation.navigate('Mens')}>
          <Text style={styles.categoriaText}>Mens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoriaCircle} onPress={() => navigation.navigate('Womens')}>
          <Text style={styles.categoriaText}>Womens</Text>
        </TouchableOpacity>
      </View>
      {/* Banner */}
      <View style={styles.bannerBox}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' }}
          style={styles.bannerImg}
        />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Perfumes</Text>
          <Text style={styles.bannerDesc}>Garanta o seu com 30% off</Text>
          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>Visitar agora ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Cards de produtos */}
      <View style={styles.produtosGrid}>
        {produtos.map(produto => (
          <View key={produto.id} style={styles.produtoCard}>
            <Image source={{ uri: produto.imagem }} style={styles.produtoImg} />
            <Text style={styles.produtoNome}>{produto.nome}</Text>
            <Text style={styles.produtoDesc} numberOfLines={2}>{produto.descricao}</Text>
            <View style={styles.produtoInfoRow}>
              <Text style={styles.produtoPreco}>{produto.preco}</Text>
              <Text style={styles.produtoDesconto}>{produto.desconto}</Text>
            </View>
            <View style={styles.produtoAval}>
              <Icon name="star" size={14} color="#FFD700" />
              <Text style={styles.produtoAvalText}>{produto.estrelas}</Text>
              <Text style={styles.produtoAvalCount}>({produto.avaliacoes})</Text>
            </View>
          </View>
        ))}
      </View>
      {/* Conteúdo Principal */}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 32 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 18,
  },
  logoBox: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  logoNS: {
    position: 'absolute',
    top: 18,
    left: 22,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#B4D464',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 16,
    overflow: 'hidden',
  },
  logoText: {
    color: '#B4D464',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 2,
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F9E6F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 16,
    marginHorizontal: 18,
    marginBottom: 12,
    height: 44,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    paddingHorizontal: 10,
    color: '#222',
  },
  categoriasTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 18,
    marginBottom: 8,
  },
  categoriasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginBottom: 16,
  },
  categoriaCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginHorizontal: 2,
  },
  categoriaText: {
    fontSize: 13,
    color: '#222',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  },
  bannerBox: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    marginHorizontal: 18,
    marginBottom: 18,
    padding: 12,
    alignItems: 'center',
    elevation: 1,
  },
  bannerImg: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  bannerDesc: {
    fontSize: 13,
    color: '#666',
    marginVertical: 2,
  },
  bannerBtn: {
    backgroundColor: '#B4D464',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  bannerBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  produtosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 8,
  },
  produtoCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    elevation: 2,
  },
  produtoImg: {
    width: '100%',
    height: 90,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  produtoNome: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  produtoDesc: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  produtoInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  produtoPreco: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#B4D464',
    marginRight: 8,
  },
  produtoDesconto: {
    fontSize: 12,
    color: '#FF6347',
    fontWeight: 'bold',
  },
  produtoAval: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  produtoAvalText: {
    fontSize: 12,
    color: '#222',
    marginLeft: 2,
    marginRight: 4,
  },
  produtoAvalCount: {
    fontSize: 11,
    color: '#888',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
