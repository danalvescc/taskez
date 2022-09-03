import styled from 'styled-components/native';
import colors from '@constants/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 16px;
  margin: 0 auto;
  width: 92%;
  border-radius: 16px;
  background-color: ${colors.WHITE};
  shadowColor: ${colors.BLACK};
  shadowOffset: {width: 0, height: 0};
  shadowOpacity: 0.05;
  shadowRadius: 2;
`;

export const InputTask = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid ${colors.GRAY1};
  background-color: ${colors.GRAY2};
`;

export const DetailStack = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-size: 16;
  color: ${colors.BLACK};
  /* font-family: 'Rubik-Black'; */
`;

export const SubTitle = styled.Text`
  font-size: 12;
  color: ${colors.BLACK};
  /* font-family: 'RubikLight'; */
`;
