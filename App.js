import React from 'react';
import {ToDoProvider} from '@contexts/todoContext';
import TabNavigation from '@routes/TabNavigation';

const navigationRef = React.createRef();

const App = () => {
  return (
    <ToDoProvider>
      <TabNavigation navigationRef={navigationRef} />
    </ToDoProvider>
  );
};

export default App;
