import React, {useState} from 'react';
import {
  Container,
  CadastroBtn,
  TextButton,
  TextInput,
  Title,
  Title1,
  Title2,
} from './styles';

import {usePeoples} from '../../hooks/db';

import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const {peoples, setPeoples} = usePeoples();
  const [nome, setNome] = useState(String);

  const navigation = useNavigation();

  const registerPeople = () => {
    const id = peoples.length + 1;

    const people = {
      nome,
      id,
    };

    setPeoples([...peoples, people]);
    Alert.alert(nome, 'Cadastrado com sucesso.');
    navigation.navigate('Dashboard');
  };

  return (
    <Container>
      <Title>
        <Title1>PEOPLES</Title1>
        <Title2>BOOK!</Title2>
      </Title>

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#dda"
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <CadastroBtn
        onPress={() => {
          registerPeople();
        }}>
        <TextButton>CADASTRAR</TextButton>
      </CadastroBtn>
    </Container>
  );
};

export default Register;
