import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import {useToDo} from '@contexts/todoContext';

import {Container} from './style';
import GroupList from '@components/GroupList';
import ItemList from '@components/ItemList';

const Home = () => {
  const [selectedGroup, setSelectedGroup] = useState();

  return (
    <Container>
      <SafeAreaView>
        <GroupList
          setSelectedGroup={setSelectedGroup}
          selectedGroup={selectedGroup}
        />
        <ItemList selectedGroup={selectedGroup} />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
