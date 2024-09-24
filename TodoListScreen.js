import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getTasks } from './Database';

export default function TodoListScreen({ route, navigation }) {
  const { groupId } = route.params;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    getTasks(groupId, setTasks);
  };

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}>
            {item.title}
          </Text>
        )}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('TaskCreation', { groupId })} />
    </View>
  );
}
