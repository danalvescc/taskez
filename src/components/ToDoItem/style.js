import styled from 'styled-components/native';
import colors from '@constants/colors';
import fonts from '@constants/fonts';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 16px;
  margin: 6px auto;
  width: 100%;
  border-radius: 16px;
  background-color: ${colors.WHITE};
  shadowColor: ${colors.BLACK};
  shadowOffset: {width: 0, height: 0};
  shadowOpacity: 0.05;
  shadowRadius: 2;
`;

export const InputTask = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid ${props => (props.checked ? colors.GREEN : colors.GRAY1)};
  background-color: ${props => (props.checked ? colors.GREEN : colors.GRAY1)};
`;

export const DetailStack = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-size: 16;
  padding-bottom: 4px;
  color: ${colors.BLACK};
  font-family: ${fonts.REGULAR};
`;

export const SubTitle = styled.Text`
  font-size: 12;
  color: ${colors.BLACK};
  font-family: ${fonts.LIGHT};
`;
