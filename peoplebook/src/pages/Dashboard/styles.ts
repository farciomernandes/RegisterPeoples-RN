import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

export const Title1 = styled.Text`
  color: #4ed918;
  font-size: 40px;
`;

export const Title2 = styled.Text`
  color: #7966e3;
  font-size: 40px;
`;

export const Title = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CadastroBtn = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  border-radius: 10px;
  background: #4ed918;

  justify-content: center;
  align-items: center;
  margin: 0 12%;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const ListBtn = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  border-radius: 10px;
  background: #7966e3;

  justify-content: center;
  align-items: center;
  margin: 2% 12%;
`;
