import {ScrollView} from 'react-native';
import React from 'react';
import {useToDo} from '@contexts/todoContext';
import Title from '@components/Title';
import ToDoItem from '@components/ToDoItem';

const ItemList = ({selectedGroup}) => {
  const {toDoList} = useToDo();

  const filteredList = toDoList.filter(i => i.group === selectedGroup);

  return (
    <>
      <Title>Your Tasks</Title>
      <ScrollView>
        {filteredList?.map(item => (
          <ToDoItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            done={item.done}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default ItemList;
