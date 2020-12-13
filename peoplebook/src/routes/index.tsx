import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import List from '../pages/List';

const Rotas = createStackNavigator();

const Routes: React.FC = () => (
  <Rotas.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#fff'},
    }}>
    <Rotas.Screen name="Dashboard" component={Dashboard} />
    <Rotas.Screen name="Register" component={Register} />
    <Rotas.Screen name="List" component={List} />
  </Rotas.Navigator>
);

export default Routes;
