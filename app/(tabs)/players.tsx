import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Header from "../../components/header";
import UserOverview from "../../components/users/UserOverview";
import UserService from "../../services/UserService";
import type { User } from "../../types";

export default function Players() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const userResponse = await UserService.getAll();
        const userData = await userResponse.json();
        setUsers(userData);
      } catch (err) {
        setError('Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View className="flex-1">
        <Header />
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#6366f1" />
          <Text className="mt-4 text-gray-600">Loading players...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1">
        <Header />
        <View className="flex-1 justify-center items-center">
          <Text className="text-red-500 text-lg">{error}</Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Header />
      <View className="p-6 flex-1 items-center">
        <Text className="text-center text-indigo-800 text-3xl mb-5">Players</Text>
        
        <View className="mt-5 w-full">
          {users && <UserOverview users={users} />}
        </View>
      </View>
    </View>
  );
}