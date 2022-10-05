import colors from '@constants/colors';
import fonts from '@constants/fonts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@screens/Home';
import React from 'react';

const Tab = createBottomTabNavigator();

const navigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    backgroundColor: colors.GRAY1,
  },
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontSize: 24,
    color: colors.GRAY3,
    fontFamily: fonts.BOLD,
  },
};

const TabNavigation = ({navigationRef}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator screenOptions={navigationOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
