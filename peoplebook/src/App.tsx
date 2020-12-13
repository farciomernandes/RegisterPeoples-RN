import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import PeopleProvider from './hooks/db';

import Routes from './routes/index';

const App = () => {
  return (
    <NavigationContainer>
      <PeopleProvider>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <Routes />
        </View>
      </PeopleProvider>
    </NavigationContainer>
  );
};

export default App;
