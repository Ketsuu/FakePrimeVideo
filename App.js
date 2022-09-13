import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, Viw } from "react-native";
import { View } from "react-native-web";

//importando os componentes de navegação 
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-native/native-stack';

//ROTAS - importando as telas que pretendemos navegar

import TelaLogin from "./assets/src/telas/TelaLogin";
import TelaPrincipal from "./assets/src/telas/TelaPrincipal";
import TelaFilme from './assets/src/telas/TelaFilme';

//Criando uma constante para carregar o componente de "empilhamento" de telas
//o StackNavigator

const Stack = createNativeStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='login' component={TelaLogin}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name='Principal' component={TelaPrincipal}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name='filme' component={TelaFilme}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
