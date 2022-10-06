import React from 'react';
import {Container, Image, Title} from './style';
const GroupItem = ({title, image, onPress, selected}) => {
  return (
    <Container onPress={onPress} selected={selected}>
      <Image source={image} />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupItem;
