import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../constants/Colors';

/* Screens */
import Home from '../screens/Home';
import Data from '../screens/Data';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Data"
        component={Data}
        options={{
          tabBarLabel: 'Data',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="database" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
