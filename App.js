import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function InicioTabs() {
  return (
    <Tab.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
