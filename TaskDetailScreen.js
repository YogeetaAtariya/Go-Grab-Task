import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getTasks, updateTaskStatus, deleteTask } from './Database';

export default function TaskDetailScreen({ route, navigation }) {
  const { taskId } = route.params;
  const [task, setTask] = useState(null);

  useEffect(() => {
    getTasks(taskId, setTask);
  }, []);

  const markCompleted = () => {
    updateTaskStatus(taskId, 'Completed', () => navigation.goBack());
  };

  const removeTask = () => {
    deleteTask(taskId, () => navigation.goBack());
  };

  return (
    <View>
      {task && (
        <>
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
          <Text>Status: {task.status}</Text>
          <Button title="Mark as Completed" onPress={markCompleted} />
          <Button title="Delete Task" onPress={removeTask} />
        </>
      )}
    </View>
  );
}
