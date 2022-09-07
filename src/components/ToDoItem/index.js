import colors from '@constants/colors';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, InputTask, DetailStack, Title, SubTitle} from './style';

const ToDoItem = ({title, subtitle, done}) => {
  return (
    <Container>
      <InputTask checked={done}>
        {done && <Icon name="check" size={18} color={colors.WHITE} />}
      </InputTask>
      <DetailStack>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </DetailStack>
    </Container>
  );
};

export default ToDoItem;
