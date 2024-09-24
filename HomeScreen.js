import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { createTables, getGroups, insertGroup } from './Database';

export default function HomeScreen({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    createTables();
    fetchGroups();
  }, []);

  const fetchGroups = () => {
    getGroups(setGroups);
  };

  const addGroup = () => {
    if (groupName) {
      insertGroup(groupName, () => {
        setGroupName('');
        fetchGroups();
      });
    }
  };

  return (
    <View>
      <Text>Groups</Text>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text onPress={() => navigation.navigate('TodoList', { groupId: item.id })}>
            {item.name}
          </Text>
        )}
      />
      <TextInput placeholder="New Group" value={groupName} onChangeText={setGroupName} />
      <Button title="Add Group" onPress={addGroup} />
    </View>
  );
}
