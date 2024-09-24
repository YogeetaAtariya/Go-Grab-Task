import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { insertTask } from './Database';

export default function TaskCreationScreen({ route, navigation }) {
  const { groupId } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const saveTask = () => {
    if (title && description) {
      insertTask(groupId, title, description, 'Pending', () => navigation.goBack());
    }
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Save Task" onPress={saveTask} />
    </View>
  );
}
