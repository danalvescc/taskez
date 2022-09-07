import React, {useContext, createContext, useState} from 'react';

const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
  const [toDoList, setToDoList] = useState([
    {
      id: 0,
      title: 'Gym',
      subtitle: 'LegDay',
      description: 'Show all exercises todo',
      done: true,
    },
    {
      id: 1,
      title: 'Gym2',
      subtitle: 'LegDay',
      description: 'Show all exercises todo',
      done: false,
    },
    {
      id: 2,
      title: 'Gym3',
      subtitle: 'LegDay',
      description: 'Show all exercises todo',
      done: false,
    },
    {
      id: 3,
      title: 'Gym4',
      subtitle: 'LegDay',
      description: 'Show all exercises todo',
      done: false,
    },
  ]);

  const createToDo = item => {
    if (!item.title) {
      throw new Error('Title cannot be empty.');
    }
    if (!item.subtitle) {
      throw new Error('Subtitle cannot be empty.');
    }
    if (!item.description) {
      throw new Error('Description cannot be empty.');
    }
    const id = toDoList.length;
    item.id = id;

    setToDoList([...toDoList, item]);
  };

  const changeToDo = item => {
    const newToDoList = [...toDoList];
    newToDoList[item.id] = item;
    setToDoList(newToDoList);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDoList,
        createToDo,
        changeToDo,
      }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDo = () => {
  const context = useContext(ToDoContext);
  return context;
};
