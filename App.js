import React from 'react';
import Home from '@screens/Home';
import {ToDoProvider} from '@contexts/todoContext';

const App = () => {
  return (
    <ToDoProvider>
      <Home />
    </ToDoProvider>
  );
};

export default App;
