import React from 'react';
import {Container, Image, Title} from './style';

const GroupItem = ({title}) => {
  //const background = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  const img = require('@assets/images/background/background1.jpg');
  return (
    <Container>
      <Image source={img} />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupItem;
