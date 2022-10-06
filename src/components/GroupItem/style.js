import styled from 'styled-components/native';
import colors from '@constants/colors';
import fonts from '@constants/fonts';

export const Container = styled.TouchableOpacity`
  margin-right: 12px;
  width: 152px;
  height: 200px;

  background: ${props => (props.selected ? '#fff' : '#3c4560')};
  border-radius: 14px;
  
  shadowColor: ${colors.BLACK};
  shadowOffset: {width: 0, height: 0};
  shadowOpacity: 0.05;
  shadowRadius: 2;
  `;

export const Title = styled.Text`
  font-size: 18;
  margin: 16px;
  color: ${colors.WHITE};
  font-family: ${fonts.BOLD};
  text-transform: uppercase;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  border-radius: 14px;
`;
