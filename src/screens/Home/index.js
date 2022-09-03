import ToDoItem from '@components/ToDoItem';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Container} from './style';

const Home = () => {
  return (
    <Container>
      <SafeAreaView>
        <ToDoItem />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
