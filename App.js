import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TodoListScreen from './TodoListScreen';
import TaskDetailScreen from './TaskDetailScreen';
import TaskCreationScreen from './TaskCreationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
        <Stack.Screen name="TaskCreation" component={TaskCreationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
