import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
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
  margin: 20px 0;
`;

export const DeletarBtn = styled.TouchableOpacity`
  width: 18%;
  height: 45px;
  border-radius: 10px;
  background: #eb432a;

  justify-content: center;
  align-items: center;
  margin: -7.5% 12%;
  left: 224px;
`;

export const TextCard = styled.Text`
  color: #fff;
  font-size: 18px;
  position: relative;
  top: 9px;
  left: 12px;
`;

export const Card = styled.View`
  border-radius: 10px;
  height: 45px;
  margin: 25px 36px;
  background: #4ed918;
`;
