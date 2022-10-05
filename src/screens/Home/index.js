import React from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';

import {useToDo} from '@contexts/todoContext';

import {Container} from './style';
import Title from '@components/Title';
import ToDoItem from '@components/ToDoItem';
import GroupItem from '@components/GroupItem';

const Home = () => {
  const {toDoList, groupList} = useToDo();
  const renderGroupList = item => (
    <GroupItem key={item.id} title={item.title} />
  );

  return (
    <Container>
      <SafeAreaView>
        <Title>Your Groups</Title>
        <FlatList
          horizontal={true}
          data={groupList}
          renderItem={renderGroupList}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <Title>Your Tasks</Title>
        <ScrollView>
          {toDoList?.map(item => (
            <ToDoItem
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              done={item.done}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default Home;
