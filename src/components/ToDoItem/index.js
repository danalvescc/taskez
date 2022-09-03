import React from 'react';
import {Container, InputTask, DetailStack, Title, SubTitle} from './style';

const ToDoItem = () => {
  return (
    <Container>
      <InputTask />
      <DetailStack>
        <Title>Sei nao</Title>
        <SubTitle>Sei nao ao quadrado</SubTitle>
      </DetailStack>
    </Container>
  );
};

export default ToDoItem;
