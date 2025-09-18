import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import EsqueceuSenha from './screens/EsqueceuSenha';
import Inicio from './screens/Inicio';
import Produto from './screens/Produto';
import Perfil from './screens/Perfil';
import Entrega from './screens/Entrega';
import Carrinho from './screens/Carrinho';
import Pagamento from './screens/Pagamento';
import Beleza from './screens/Beleza';
import Fashion from './screens/Fashion';
import Moda from './screens/Moda';
import Mens from './screens/Mens';
import Womens from './screens/Womens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function InicioTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') {
            iconName = 'home-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'account-circle-outline';
          } else if (route.name === 'Carrinho') {
            iconName = 'cart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B4D464',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="InicioTabs" component={InicioTabs} />
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="Entrega" component={Entrega} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Beleza" component={Beleza} />
        <Stack.Screen name="Fashion" component={Fashion} />
        <Stack.Screen name="Moda" component={Moda} />
        <Stack.Screen name="Mens" component={Mens} />
        <Stack.Screen name="Womens" component={Womens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
