import React, {useEffect, useState} from 'react';

import {
  Container,
  Title1,
  Title2,
  Title,
  TextCard,
  Card,
  DeletarBtn,
} from './styles';
import {Alert, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {usePeoples} from '../../hooks/db';

import lixoImg from '../../assets/lixo.png';

const List = () => {
  const {peoples, setPeoples} = usePeoples();
  const [dados, setDados] = useState([]);

  const navigation = useNavigation();

  interface People {
    nome: string;
    id: number;
  }
  useEffect(() => {
    setDados(peoples);
  }, [peoples]);

  const handleDelete = (id) => {
    const check = peoples.findIndex((people: People) => people.id === id);

    if (check === -1) {
      Alert.alert('Erro ao deletar a pessoa selecionada. Tente novamente!');
    } else {
      setPeoples(peoples.filter((people: People) => people.id !== id));
      Alert.alert('Removido com Sucesso!');
      navigation.navigate('Dashboard');
    }
  };

  return (
    <Container>
      <Title>
        <Title1>PEOPLES</Title1>
        <Title2>BOOK!</Title2>
      </Title>

      <FlatList
        data={dados}
        keyExtractor={(pessoa) => String(pessoa.id)}
        renderItem={({item: pessoa}) => (
          <Card>
            <TextCard>{pessoa.nome}</TextCard>
            <DeletarBtn
              onPress={() => {
                handleDelete(pessoa.id);
              }}>
              <Image source={lixoImg} />
            </DeletarBtn>
          </Card>
        )}
      />
    </Container>
  );
};

export default List;
