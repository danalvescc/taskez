import React from 'react';
import {SafeAreaView} from 'react-native';

import {useToDo} from '@contexts/todoContext';

import ToDoItem from '@components/ToDoItem';
import {Container} from './style';
import Title from '@components/Title';

const Home = () => {
  const {toDoList} = useToDo();

  return (
    <Container>
      <SafeAreaView>
        <Title>Your Tasks</Title>
        {toDoList?.map(item => (
          <ToDoItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            completed={item.completed}
          />
        ))}
      </SafeAreaView>
    </Container>
  );
};

export default Home;
