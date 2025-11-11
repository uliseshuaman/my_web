import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersScreen = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    axios.get<User[]>('https://devsapihub.com/api-users')
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const renderItem: ListRenderItem<User> = ({ item }) => (
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: '/usuarios/[id]',
            params: {
              id: item.id.toString(), // debe ser string
              name: item.name,
              email: item.email,
            },
          })
        }
>
      <View style={styles.userItem}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) return <View style={styles.centered}><ActivityIndicator size="large" color="#0000ff" /></View>;
  if (error) return <View style={styles.centered}><Text style={styles.error}>Error: {error}</Text></View>;

  return <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: 'red', fontSize: 18 },
  userItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  userName: { fontSize: 18, fontWeight: 'bold' },
  userEmail: { fontSize: 14, color: '#666' },
});

export default UsersScreen;