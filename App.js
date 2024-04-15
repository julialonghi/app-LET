import React from "react";
import { View, Text} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import home from './home/home.js'
import atividades from './atividades/atividade.js';
import camera from './camera/camera.js';
import perfil from './perfil/perfil.js';
import relatorio from './relatorio/relatorio.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Início" component={home}/>
      <Tab.Screen name="Tarefas" component={atividades}/>
      <Tab.Screen name="Câmera" component={camera}/>
      <Tab.Screen name="Relatório" component={relatorio}/>
      <Tab.Screen name="Perfil" component={perfil}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Tabs}
        options={{
          title: 'LIFE EDGE TECHNOLOGIES',
          headerStyle: {
            backgroundColor: '#91C1EF'
          },
          headerTintColor: '#FFF'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}