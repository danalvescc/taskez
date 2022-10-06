import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useToDo} from '@contexts/todoContext';

import Title from '@components/Title';
import GroupItem from '@components/GroupItem';

const imagesPaths = [
  require('@assets/images/background/background1.jpg'),
  require('@assets/images/background/background2.jpg'),
  require('@assets/images/background/background3.jpg'),
  require('@assets/images/background/background4.jpg'),
  require('@assets/images/background/background5.jpg'),
  require('@assets/images/background/background6.jpg'),
  require('@assets/images/background/background7.jpg'),
  require('@assets/images/background/background8.jpg'),
  require('@assets/images/background/background9.jpg'),
  require('@assets/images/background/background10.jpg'),
  require('@assets/images/background/background11.jpg'),
  require('@assets/images/background/background12.jpg'),
  require('@assets/images/background/background13.jpg'),
  require('@assets/images/background/background14.jpg'),
  require('@assets/images/background/background15.jpg'),
  require('@assets/images/background/background16.jpg'),
];

const GroupList = ({setSelectedGroup, selectedGroup}) => {
  const {groupList} = useToDo();

  useEffect(() => {
    setSelectedGroup(groupList[0].id);
  }, []);

  const renderGroupList = ({item}) => {
    return (
      <GroupItem
        key={item.id}
        image={imagesPaths[item.id % imagesPaths.length]}
        title={item.title}
        selected={selectedGroup === item.id}
        onPress={() => setSelectedGroup(item.id)}
      />
    );
  };

  return (
    <>
      <Title>Your Groups</Title>
      <FlatList
        horizontal={true}
        data={groupList}
        renderItem={renderGroupList}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default GroupList;
