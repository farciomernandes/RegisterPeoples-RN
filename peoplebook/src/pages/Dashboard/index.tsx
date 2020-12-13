import React from 'react';
import {Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title1,
  Title2,
  Title,
  CadastroBtn,
  TextButton,
  ListBtn,
} from './styles';

import imgCenter from '../../assets/dashboard.png';

const App = () => {
  const navigation = useNavigation();

  function goToRegister() {
    navigation.navigate('Register');
  }

  function goToList() {
    navigation.navigate('List');
  }

  return (
    <Container>
      <Title>
        <Title1>PEOPLES</Title1>
        <Title2>BOOK!</Title2>
      </Title>
      <Image
        source={imgCenter}
        style={{width: '80%', height: '40%', left: 65}}
      />

      <CadastroBtn onPress={goToRegister}>
        <TextButton>CADASTRAR</TextButton>
      </CadastroBtn>

      <ListBtn onPress={goToList}>
        <TextButton>LISTAR CADASTROS</TextButton>
      </ListBtn>
    </Container>
  );
};

export default App;
