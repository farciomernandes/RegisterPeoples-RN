import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

export const CadastroBtn = styled.TouchableOpacity`
  width: 50%;
  height: 55px;
  border-radius: 10px;
  background: #4ed918;

  justify-content: center;
  align-items: center;
  margin: 0 26%;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const TextInput = styled.TextInput`
  color: #7966e3;
  font-size: 16px;
  border: 1px solid #4ed918;
  text-align: center;
  margin: 18px 0;
  width: 70%;
  left: 15%;
  border-radius: 10px;
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
  position: relative;
  bottom: 60px;
`;
